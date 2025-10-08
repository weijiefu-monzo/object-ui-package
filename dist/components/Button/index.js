import { h } from 'preact';
import styles from './Button.module.css';
import clsx from 'clsx';
export const Button = ({ size = 'medium', color = 'secondary', startIcon, endIcon, signal, fullWidth, onClick, children, disabled, }) => {
    return (h("button", { className: clsx(styles.button, styles[color], styles[size], signal && styles[signal], fullWidth && styles.fullWidth, disabled && styles.disabled), onClick: onClick, disabled: disabled },
        startIcon && h("span", { className: styles.startIcon }, startIcon),
        h("span", { className: styles.label }, children),
        endIcon && h("span", { className: styles.endIcon }, endIcon)));
};
