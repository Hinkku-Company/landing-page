import type { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}

export const HamburgerIcon = ({ SvgClassName, style }: Props) => {

    return (
        <svg className={SvgClassName} style={style} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 36V33H42V36H6ZM6 25.5V22.5H42V25.5H6ZM6 15V12H42V15H6Z" fill="white" />
        </svg>

    )
}

