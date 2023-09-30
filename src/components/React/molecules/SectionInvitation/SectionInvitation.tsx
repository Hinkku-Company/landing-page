import { basePath, goToTermsAndPrivacy } from "@/utils/contantes"
import { StandardButton } from "@components/React/atoms"
import { StandardInput } from "@components/React/atoms"
import { Subscription } from "@components/customHooks/Subscription"

export const SectionInvitation = () => {

    return (
        <div id='contact' className="bg-[--color-bg-white] p-[3.75rem] grid place-items-center md:py-[13rem]">
            <div className="md:grid md:justify-items-center container mx-auto">
                <div className="text-center">
                    <h3 className="custom-title font-[--font-w-title] text-[--color-title] pb-[2rem] md:text-center">
                        Unete a nuestra comunidad
                    </h3>

                    <Subscription />
                    <p className="text-[--neutral] text-[.60rem] md:text-[.75rem] text-left pt-6 mr-15">
                        Al enviar el correo estas aceptando nuestros
                        <a className="link pl-1" href={`${basePath}${goToTermsAndPrivacy}`}>
                            Términos y Condiciones
                        </a>.
                    </p>
                </div>
            </div>


        </div>
    )
}