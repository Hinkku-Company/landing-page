import './carousel.css';
import { LeftArrowIcon } from "@components/React/atoms/Icons/LeftArrowIcon";
import { RightArrowIcon } from "@components/React/atoms/Icons/RightArrowIcon";
import { slideData } from "../slideData";
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
            {/* Mobile */}
            <div className='grid grid-flow-col place-items-center h-[20rem] md:hidden'>
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

            {/* Desktop */}
            <div className='hidden md:grid grid-cols-3 gap-6'>
                {
                    slideData.map(({ Icon, text, title }, index) => (
                        <li className={`item-slide-d mw-[26rem] grid place-items-center col-span-1 text-center`} key={index}>
                            <span className='flex items-center justify-center bg-[--primary] w-[100px] h-[100px] rounded-full'>
                                {Icon ? <Icon SvgClassName='icon-white icon-slide-d' /> : null}
                            </span>
                            <h3 className='text-[--color-title]'>{title}</h3>
                            <p className='text-[--color-text] self-start mt-[1rem] px-2 lg:px-4'>{text}</p>
                        </li>
                    ))
                }
            </div>

            <span className="carousel-indicators md:hidden">
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
