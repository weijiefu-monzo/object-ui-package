import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import styles from './Button.module.css';
import clsx from 'clsx';
export const Button = ({ size = 'medium', color = 'secondary', startIcon, endIcon, signal, fullWidth, onClick, children, disabled, }) => {
    return (_jsxs("button", { className: clsx(styles.button, styles[color], styles[size], signal && styles[signal], fullWidth && styles.fullWidth, disabled && styles.disabled), onClick: onClick, disabled: disabled, children: [startIcon && _jsx("span", { className: styles.startIcon, children: startIcon }), _jsx("span", { className: styles.label, children: children }), endIcon && _jsx("span", { className: styles.endIcon, children: endIcon })] }));
};
