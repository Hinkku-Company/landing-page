import './ripple-effect.css';
import type { MouseEvent } from 'react';

/**
 * Ripple effect create a new element and append it to the button
 * styles required in the parent:
 *   position: relative;
 *   transition: background 400ms;
 *   overflow: hidden;
 *  pensar si se los agrego con js
 * @param MouseEvent
 */
export const createRipple = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>
) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) ripple.remove();

    button.appendChild(circle);
};
