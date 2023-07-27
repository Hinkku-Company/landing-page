import { SectionMobile } from './SectionMobile';
import ImageSection1 from '@/assets/imgs/imgtest1.png'
import ImageSection2 from '@/assets/imgs/imgtest2.png'
import ImageSection3 from '@/assets/imgs/imgtest3.png'

export const SectionsMobile = () => {

    const sections: {
        title: string
        imgSrc: string
        texts: string[]
        bgColor: string,
        idSection: "services" | "about" | "contact"
    }[] = [{
        title: "Descubre los mejores salones de belleza según la opinión de nuestros usuarios.",
        imgSrc: ImageSection1,
        bgColor: 'var(--color-bg-section)',
        idSection: 'services',
        texts: ["HairConnect simplifica el proceso de gestionar citas, permitiendo a los peluqueros centrarse en brindar un servicio excelente",
            "Fácil gestión de personal: Asigna tareas, administra horarios y controla el rendimiento de tu equipo, todo en un solo lugar. Simplifica la gestión de tu personal y mejora la productividad."]
    }, {
        title: "Conéctate con tus clientes y aumenta su satisfacción.",
        imgSrc: ImageSection2,
        bgColor: 'var(--color-bg-white)',
        idSection: 'about',
        texts: ["HairConnect simplifica el proceso de gestionar citas, permitiendo a los peluqueros centrarse en brindar un servicio excelente",
            "Fácil gestión de personal: Asigna tareas, administra horarios y controla el rendimiento de tu equipo, todo en un solo lugar. Simplifica la gestión de tu personal y mejora la productividad."]
    }, {
        title: "Descubre los mejores salones de belleza según la opinión de nuestros usuarios.",
        imgSrc: ImageSection3,
        bgColor: 'var(--color-bg-section)',
        idSection: 'contact',
        texts: ["HairConnect simplifica el proceso de gestionar citas, permitiendo a los peluqueros centrarse en brindar un servicio excelente",]
    }];


    return (
        <>
            {
                sections?.map((section, index: number) => (
                    <SectionMobile key={index} {...section} />
                ))
            }
        </>
    )
}
