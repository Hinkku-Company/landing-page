import { sendEmail } from "@/serviceEmail"
import { StandardButton, StandardInput } from "@components/React/atoms";
import { ChangeEvent, useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const MySwal = withReactContent(Swal)

export const Subscription = () => {
    const [email, setEmail] = useState('');
    const [emailData, setEmailData] = useState({
        isValid: true,
        message: ''
    });

    const onSendEmail = async () => {
        console.log('email sended', email)
        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail) {
            setEmailData({
                isValid: false,
                message: 'Por favor ingresa un correo válido'
            });

            return;
        }

        setEmailData({
            isValid: true,
            message: ''
        })

        const wasOk = await sendEmail(email);

        if (wasOk.isOk) {
            showAlert('Email enviado');
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Opss... algo salio mal',
                text: wasOk.opts
            });
        }
    }

    const showAlert = (msg: string) => {
        MySwal.fire({
            title: <strong>Suscripción Completada!</strong>,
            icon: 'success'
        })
    }

    const onChangeEmail = (value: ChangeEvent<HTMLInputElement>) => {
        setEmail(value.target.value.trim());
    }

    return (
        <>
            <div className="grid gap-4 md:grid-cols-3 md:gap-7 max-w-[38rem] md:w-full">
                <StandardInput onChange={onChangeEmail} className="md:col-span-2" placeholder="Correo Electrónico" />
                <StandardButton className="md:col-span-1" onClick={onSendEmail}>Unirse</StandardButton>

            </div>
            {
                !emailData.isValid && emailData.message.length > 0 ? <p className="text-red-500 text-[.70rem] md:text-[.85rem] pt-3">{emailData.message}</p> : null
            }
        </>
    )

}