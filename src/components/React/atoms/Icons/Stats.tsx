
import type { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}

export const StatsIcon = ({ SvgClassName, style }: Props) => {

    return (
        <svg className={SvgClassName} style={style} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.25 33.75H61.425C60.875 27.65 58.4125 22.3625 54.0375 17.8875C49.6625 13.4125 44.4 10.975 38.25 10.575V33.75ZM33.75 61.425V10.575C27.2 11.125 21.6875 13.85 17.2125 18.75C12.7375 23.65 10.5 29.4 10.5 36C10.5 42.6 12.7375 48.35 17.2125 53.25C21.6875 58.15 27.2 60.875 33.75 61.425ZM38.25 61.425C44.4 61.025 49.6625 58.5875 54.0375 54.1125C58.4125 49.6375 60.875 44.35 61.425 38.25H38.25V61.425ZM36 66C31.85 66 27.95 65.2125 24.3 63.6375C20.65 62.0625 17.475 59.925 14.775 57.225C12.075 54.525 9.9375 51.35 8.3625 47.7C6.7875 44.05 6 40.15 6 36C6 31.85 6.7875 27.95 8.3625 24.3C9.9375 20.65 12.075 17.475 14.775 14.775C17.475 12.075 20.65 9.9375 24.3 8.3625C27.95 6.7875 31.85 6 36 6C40.15 6 44.05 6.7875 47.7 8.3625C51.35 9.9375 54.525 12.075 57.225 14.775C59.925 17.475 62.0625 20.65 63.6375 24.3C65.2125 27.95 66 31.85 66 36C66 40.15 65.2125 44.05 63.6375 47.7C62.0625 51.35 59.925 54.525 57.225 57.225C54.525 59.925 51.35 62.0625 47.7 63.6375C44.05 65.2125 40.15 66 36 66Z" fill="white" />
        </svg>

    )
}