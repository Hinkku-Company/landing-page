import "./hero.css";
// @ts-ignore
import HeroImage from "@/assets/imgs/heroImg.png";

import { IdHome, basePath, goToTermsAndPrivacy } from "@/utils/contantes";
import { Subscription } from "@components/customHooks/Subscription";
export const Hero = () => {
    const BigTitleText1 = "Conéctate con";
    const BigTitleText2 = "tus clientes";
    const BigTitleText3 = "sin esfuerzo.";
    return (
        <div
            id={IdHome}
            className="w-full h-[37.5rem] mh-[67.5rem] relative md:h-[100vh]"
        >
            <div className="w-full h-full relative">
                <img
                    className="w-full h-full img-hero"
                    src={HeroImage.src}
                    alt="Image about a haircut in a salon"
                />

                <div className="w-full h-full relative opacity">
                    <div className="w-full h-full container mx-auto flex items-center justify-center md:justify-start">
                        <div className="container-text-header relative grid grid-rows-3 gap-3 w-[18rem] md:w-[68%] md:max-w-[40rem] md:ml-[4.5rem] md:mt-[4.5rem]">
                            <div className="row-span-3 pb-1 md:pb-3">
                                <h1 className="text-[--color-big-title] font-[900]">
                                    {BigTitleText1} <br /> {BigTitleText2} <br /> {BigTitleText3}
                                </h1>
                            </div>

                            <div className="row-span-2" />

                            <Subscription />

                            <p className="text-[--white] text-[.60rem] md:text-[.75rem] text-left">
                                Al enviar el correo estas aceptando nuestros
                                <a className="link pl-1" href={`${basePath}${goToTermsAndPrivacy}`}>
                                    Términos y Condiciones
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
