import { StandardButton } from "@components/React/atoms"
import { StandardInput } from "@components/React/atoms"

export const SectionInvitation = () => {

    const sendEmail = () => {
        console.log('email sended')
    }

    return (
        <div className="bg-[--color-bg-white] p-[3.75rem] grid place-items-center">
            <div className="">
                <h3 className="custom-title font-[--font-w-title] text-[--color-title] pb-[2rem]">
                    Unete a nuestra comunidad de peluqueros
                </h3>

                <div className="grid gap-4">
                    <StandardInput placeholder="tucorreo@example.com" />
                    <StandardButton onClick={sendEmail}>SIGN UP</StandardButton>
                </div>
            </div>
        </div>
    )
}