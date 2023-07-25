import { Carousel } from './Carousel/Carousel';
import './content.css';

export const SlideContent = () => {

    return (
        <div className='bg-slide-container py-12'>
            <div className='container slide-container grid place-content-center'>
                <p className='text-[--color-title]'>Mejora el alcance de tu negocio</p>
            </div>

            <div className='slider'>
                <Carousel />
            </div>
        </div>
    )
}
