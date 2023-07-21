import { StadisticIcon } from "@/ui/atoms/icons/Stadistic";
import { StarIcon } from "@/ui/atoms/icons/Star";
import { StatsIcon } from "@/ui/atoms/icons/Stats";

export const slideData = [
    {
        Icon: StarIcon,
        text: 'Nuestro sistema de puntuaciones y reseñas promueve la transparencia y la confianza en la industria de la belleza.',
        title: 'Sistema de clasificacion'
    }, {
        Icon: StatsIcon,
        text: 'tendrás a tu disposición herramientas necesarias para controlar tus ventas, facturas, estadísticas y más. Simplifica la gestión diaria de tu negocio de peluquería y toma el control completo.',
        title: 'Gestiona tu negocio '
    }, {
        Icon: StadisticIcon,
        text: 'Al utilizar HairConnect, atraeras nuevos clientes y construiras una base de clientes leales, lo que conduce al crecimiento y éxito del negocio.',
        title: 'Haz crecer tu negocio'
    }
] as const;

