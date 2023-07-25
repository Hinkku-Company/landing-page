import type { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}
export const TikTokIcon = ({ SvgClassName, style }: Props) => {
    return (
        <svg className={SvgClassName} style={style} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.0206 10.1479C27.8287 8.78722 27.1719 7.03981 27.1724 5.23096H21.7847V26.8515C21.7431 28.0215 21.2492 29.1297 20.4068 29.9427C19.5645 30.7558 18.4395 31.2103 17.2688 31.2104C14.7929 31.2104 12.7355 29.1879 12.7355 26.6771C12.7355 23.6781 15.6298 21.4289 18.6113 22.353V16.8433C12.596 16.0412 7.33032 20.714 7.33032 26.6771C7.33032 32.4833 12.1426 36.6156 17.2513 36.6156C22.7262 36.6156 27.1724 32.1694 27.1724 26.6771V15.7099C29.3571 17.2789 31.9801 18.1207 34.6698 18.1161V12.7284C34.6698 12.7284 31.3919 12.8853 29.0206 10.1479Z" fill="white" />
        </svg>
    )
}