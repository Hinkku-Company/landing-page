import { SlideContent } from "@/ui/molecules/SlideContent";
import { Hero } from "@/ui/molecules/Hero";
import { Header } from "@/ui/molecules/Header"
import { SectionsMobile } from "@/ui/atoms/SectionsMobile";
import { SectionInvitation } from "@/ui/molecules/SectionInvitation";
import { Footer } from "@/ui/molecules/Footer";
import ImageSection1 from "@/assets/imgs/imgtest1.png"
import ImageSection2 from "@/assets/imgs/imgtest2.png"
import ImageSection3 from "@/assets/imgs/imgtest3.png"

export const Main = () => {

    const sections: {
        title: string
        imgSrc: string
        texts: string[]
        bgColor: string
    }[] = [{
        title: "Descubre los mejores salones de belleza según la opinión de nuestros usuarios.",
        imgSrc: ImageSection1,
        bgColor: 'var(--color-bg-section)',
        texts: ["HairConnect simplifica el proceso de gestionar citas, permitiendo a los peluqueros centrarse en brindar un servicio excelente",
            "Fácil gestión de personal: Asigna tareas, administra horarios y controla el rendimiento de tu equipo, todo en un solo lugar. Simplifica la gestión de tu personal y mejora la productividad."]
    }, {
        title: "Conéctate con tus clientes y aumenta su satisfacción.",
        imgSrc: ImageSection2,
        bgColor: 'var(--color-bg-white)',
        texts: ["HairConnect simplifica el proceso de gestionar citas, permitiendo a los peluqueros centrarse en brindar un servicio excelente",
            "Fácil gestión de personal: Asigna tareas, administra horarios y controla el rendimiento de tu equipo, todo en un solo lugar. Simplifica la gestión de tu personal y mejora la productividad."]
    }, {
        title: "Descubre los mejores salones de belleza según la opinión de nuestros usuarios.",
        imgSrc: ImageSection3,
        bgColor: 'var(--color-bg-section)',
        texts: ["HairConnect simplifica el proceso de gestionar citas, permitiendo a los peluqueros centrarse en brindar un servicio excelente",]
    }];

    return (
        <div>
            <Header />
            <Hero />
            <SlideContent />
            <SectionsMobile sections={sections} />
            <SectionInvitation />
            <Footer />
        </div>
    )
}

