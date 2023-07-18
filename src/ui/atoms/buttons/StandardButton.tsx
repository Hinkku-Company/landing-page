import { createRipple } from "@/utils/ripple-effect/ripple-effect";
import { MouseEvent, ReactNode } from "react";
import './standard_button.css';

export interface Props {
  onClick: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => unknown;
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  id?: string;
  title?: string;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  ripple?: boolean;
}

export const StandardButton = ({ onClick, children, type, id, title = '', className = '', disabled, active, ripple }: Props) => {
  return (
    <button
      onClick={(ev) => {
        ripple && createRipple(ev);
        onClick(ev);
      }}
      type={type}
      className={`standard-btn ${className} ${active ? 'btn-active' : ''
        }`}
      id={id}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  )
}

