import { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}

export const CloseIcon = ({ SvgClassName, style }: Props) => {

    return (
        <svg className={SvgClassName} style={style} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4501 37.65L10.3501 35.55L21.9001 24L10.3501 12.45L12.4501 10.35L24.0001 21.9L35.5501 10.35L37.6501 12.45L26.1001 24L37.6501 35.55L35.5501 37.65L24.0001 26.1L12.4501 37.65Z" fill="white" />
        </svg>
    )
}


