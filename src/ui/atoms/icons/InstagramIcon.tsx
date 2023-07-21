import { CSSProperties } from "react"

type Props = {
    SvgClassName?: string,
    style?: CSSProperties,
}
export const InstagramIcon = ({ SvgClassName, style }: Props) => {
    return (
        <svg className={SvgClassName} style={style} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9231 27.8974C22.7728 27.8974 24.5468 27.1627 25.8547 25.8547C27.1627 24.5468 27.8974 22.7728 27.8974 20.9231C27.8974 19.0734 27.1627 17.2994 25.8547 15.9915C24.5468 14.6835 22.7728 13.9487 20.9231 13.9487C19.0734 13.9487 17.2994 14.6835 15.9915 15.9915C14.6835 17.2994 13.9487 19.0734 13.9487 20.9231C13.9487 22.7728 14.6835 24.5468 15.9915 25.8547C17.2994 27.1627 19.0734 27.8974 20.9231 27.8974Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.23071 27.8976V13.9489C5.23071 11.6368 6.14921 9.41932 7.78414 7.78439C9.41907 6.14945 11.6365 5.23096 13.9487 5.23096H27.8974C30.2095 5.23096 32.427 6.14945 34.0619 7.78439C35.6968 9.41932 36.6153 11.6368 36.6153 13.9489V27.8976C36.6153 30.2098 35.6968 32.4272 34.0619 34.0621C32.427 35.6971 30.2095 36.6156 27.8974 36.6156H13.9487C11.6365 36.6156 9.41907 35.6971 7.78414 34.0621C6.14921 32.4272 5.23071 30.2098 5.23071 27.8976Z" stroke="white" strokeWidth="2.5" />
            <path d="M30.5127 11.3515L30.5309 11.3315" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
