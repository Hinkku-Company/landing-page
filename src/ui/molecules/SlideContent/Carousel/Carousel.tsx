import './carousel.css';
import { LeftArrowIcon } from "@/ui/atoms/icons/LeftArrowIcon"
import { slideData } from "../slideData"
import { RightArrowIcon } from "@/ui/atoms/icons/RightArrowIcon"
import { useState } from 'react';

export const Carousel = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === slideData.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? slideData.length - 1 : slide - 1);
    }

    return (
        <div className='grid place-items-center gap-2 relative'>
            <div className='grid grid-flow-col place-items-center h-[20rem]'>
                <LeftArrowIcon SvgClassName='col-span-1' onClick={prevSlide} />
                <div className='col-span-1'>
                    {
                        slideData.map(({ Icon, text, title }, index) => (
                            <li className={`${slide === index ? 'slide' : 'slide slide-hidden'}`} key={index}>
                                <span className='grid place-content-center bg-[--primary] w-[84px] h-[84px] rounded-full'>
                                    {Icon ? <Icon SvgClassName='icon-white' /> : null}
                                </span>
                                <p className='text-[--color-title]'>{title}</p>
                                <p className='text-[--color-text]'>{text}</p>
                            </li>
                        ))
                    }
                </div>
                <RightArrowIcon SvgClassName='col-span-1' onClick={nextSlide} />
            </div>

            <span className="carousel-indicators">
                {
                    slideData.map((_, idx: number) =>
                        <button
                            onClick={() => setSlide(idx)}
                            key={idx}
                            className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}>

                        </button>
                    )
                }
            </span>
        </div>
    )
}
