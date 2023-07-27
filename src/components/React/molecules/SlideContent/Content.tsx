import { Carousel } from './Carousel/Carousel';
import './content.css';

export const SlideContent = () => {

    return (
        <main className='bg-slide-container py-12 md:py-[--padding-sections]'>
            <div className='container mx-auto slide-container grid place-content-center gap-3'>
                <h2 className='text-[--color-title]'>Mejora el alcance de tu negocio</h2>

                <p className='hidden md:block text-[--color-text]'>
                    Nuestra aplicación facilita la conecc ion con sus clientes y gestionen las citas y estadisticas de manera fluida.
                </p>
            </div>

            <div className='slider container mx-auto md:mt-[4.75rem] md:px-[.75rem] lg:px-[2.75rem] lg:mb-[1.25rem]'>
                <Carousel />
            </div>
        </main>
    )
}
