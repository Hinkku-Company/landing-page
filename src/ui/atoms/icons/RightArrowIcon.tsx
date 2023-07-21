
import { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
    onClick?: () => void
}

export const RightArrowIcon = ({ SvgClassName, style, onClick }: Props) => {

    return (
        <svg className={SvgClassName} onClick={onClick} style={style} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M26.5001 23.9499L16.6001 14.0499L18.7501 11.8999L30.8001 23.9499L18.7501 35.9999L16.6001 33.8499L26.5001 23.9499Z" fill="black" />
        </svg>
    )
}
