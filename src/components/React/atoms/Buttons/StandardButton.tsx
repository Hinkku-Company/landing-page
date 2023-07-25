import './standard_button.css';
import { createRipple } from "../ripple/ripple-effect";
import type { MouseEvent, ReactNode } from "react";

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

export const StandardButton = ({ onClick, children, type, id, title = '', className = '', disabled, active, ripple = false }: Props) => {

  const classes = `
    standard-btn
    ${className ?? ""} 
    ${active ? 'btn-active' : ''}`;

  return (
    <button
      onClick={(ev) => {
        ripple && createRipple(ev);
        onClick(ev);
      }}
      type={type}
      className={classes}
      id={id}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  )
}

