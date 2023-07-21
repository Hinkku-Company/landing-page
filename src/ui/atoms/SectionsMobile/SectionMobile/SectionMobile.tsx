interface Props {
    title: string
    imgSrc: string
    texts: string[]
    bgColor: string
}

export const SectionMobile = ({ title, imgSrc, texts, bgColor }: Props) => {
    return (
        <div className={`py-[3.125rem] px-[1.7rem]`} style={{ backgroundColor: bgColor }}>
            <div className="grid place-items-center w-full h-[4.375rem]">
                <div className="grid bg-[--primary] w-[18rem] h-[0.625rem] rounded-t-[.2rem]"></div>

                <img className="w-full h-[3.75rem] rounded-[.5rem] object-cover" src={imgSrc} alt={`image representation of ${title}`} />
            </div>

            <h2 className="custom-title text-[--color-title] font-[--font-w-title] pt-[1.875rem] pb-[1.35rem]">
                {title}
            </h2>

            {
                texts.map((text, index) =>
                    <p key={index} className="custom-text font-[--font-w-text] text-[--color-text] pb-[1.20rem]">{text}</p>
                )
            }
        </div>
    )
}
