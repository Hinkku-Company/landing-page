import { SectionMobile } from './SectionMobile';

interface Props {
    sections: {
        title: string
        imgSrc: string
        texts: string[]
        bgColor: string
    }[]
}

export const SectionsMobile = ({ sections }: Props) => {
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
