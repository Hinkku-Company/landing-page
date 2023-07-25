
import type { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}

export const StarIcon = ({ SvgClassName, style }: Props) => {

    return (
        <svg className={SvgClassName} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9998 34.1958L32.9764 39.0224L30.8426 29.9788L37.8539 23.8821L28.6071 23.0692L24.9998 14.5337V34.1958ZM12.4506 45.3224L15.7531 31.0458L4.67725 21.4433L19.3095 20.1732L24.9998 6.70947L30.6901 20.1732L45.3224 21.4433L34.2466 31.0458L37.549 45.3224L24.9998 37.7522L12.4506 45.3224Z" fill="white" />
        </svg>
    )
}


