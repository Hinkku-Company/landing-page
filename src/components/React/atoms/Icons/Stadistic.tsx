
import type { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}

export const StadisticIcon = ({ SvgClassName, style }: Props) => {

    return (
        <svg className={SvgClassName} style={style} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 63V57.3L13.5 52.8V63H9ZM21.375 63V45.3L25.875 40.8V63H21.375ZM33.75 63V40.8L38.25 45.375V63H33.75ZM46.125 63V45.375L50.625 40.875V63H46.125ZM58.5 63V33.3L63 28.8V63H58.5ZM9 45.3V38.925L30 18.075L42 30.075L63 9V15.375L42 36.45L30 24.45L9 45.3Z" fill="white" />
        </svg>
    )
}


