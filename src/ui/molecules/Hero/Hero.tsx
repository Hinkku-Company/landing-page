/* eslint-disable @typescript-eslint/no-empty-function */
import './hero.css';
import HeroImage from "@/assets/imgs/heroImg.png";
import { StandardButton } from '@/ui/atoms';
import { BigTitleText, TitleText } from "@/utils/constants";

export const Hero = () => {
    return (
        <div className="w-full h-[37.5rem] relative">
            <div className="w-full h-full relative">
                <img className="w-full h-full img-hero" src={HeroImage} alt="Image about a haircut in a salon " />

                <div className="w-full h-full relative opacity">
                    <div className="w-[16.68rem] relative grid grid-rows-3">
                        <div className="row-span-3">
                            <span>{BigTitleText}</span>
                        </div>
                        <div className="row-span-2">
                            <span>{TitleText}</span>
                        </div>
                        <div className="row-span-1">
                            <input type="text" />
                            <StandardButton onClick={() => { }}>Get started</StandardButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
