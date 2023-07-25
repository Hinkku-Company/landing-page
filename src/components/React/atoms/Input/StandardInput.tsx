import type { FC, InputHTMLAttributes } from "react";
import './standard_input.css';

export const StandardInput: FC<InputHTMLAttributes<HTMLInputElement>> =
    ({ className = '', ...rest }) => {
        return (
            <input className={`standard-input ${className}`} {...rest} />
        )
    }
