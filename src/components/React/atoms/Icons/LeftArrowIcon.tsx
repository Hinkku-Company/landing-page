
import type { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
    onClick?: () => void
}

export const LeftArrowIcon = ({ SvgClassName, style, onClick }: Props) => {

    return (
        <svg className={SvgClassName} onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M28.05 35.9999L16 23.9499L28.05 11.8999L30.2 14.0499L20.3 23.9499L30.2 33.8499L28.05 35.9999Z" fill="black" />
        </svg>
    )
}

