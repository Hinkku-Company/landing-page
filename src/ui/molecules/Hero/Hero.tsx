/* eslint-disable @typescript-eslint/no-empty-function */
import './hero.css';
import HeroImage from "@/assets/imgs/heroImg.png";
import { StandardButton } from '@/ui/atoms';
import { StandardInput } from '@/ui/atoms/Input/StandardInput';
import { BigTitleText1, BigTitleText2, BigTitleText3, TitleText } from "@/utils/constants";

export const Hero = () => {
    return (
        <div className="w-full h-[37.5rem] relative">
            <div className="w-full h-full relative">
                <img className="w-full h-full img-hero" src={HeroImage} alt="Image about a haircut in a salon " />

                <div className="w-full h-full relative opacity">
                    <div className='w-full h-full grid place-content-center'>
                        <div className="container-text-header w-[18rem] relative grid grid-rows-3 gap-3">
                            <div className="row-span-3">
                                <p className='text-[--color-big-title] font-[900]'>
                                    {BigTitleText1} <br /> {BigTitleText2} <br /> {BigTitleText3}
                                </p>
                            </div>

                            <div className="row-span-2">
                                <p className='text-[--color-big-title]'>{TitleText}</p>
                            </div>

                            <div className="row-span-1 grid gap-4">
                                <StandardInput type="text" placeholder='tucorreo@gmail.com' />
                                <StandardButton ripple className='hero-btn' onClick={() => { }}>GET STARTED</StandardButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
