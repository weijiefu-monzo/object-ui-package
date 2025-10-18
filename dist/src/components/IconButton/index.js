import { jsx as _jsx } from "preact/jsx-runtime";
import styles from './IconButton.module.css';
import clsx from 'clsx';
export const IconButton = ({ size = 'medium', color = 'secondary', signal, children, fullWidth, onClick, }) => {
    return (_jsx("button", { className: clsx(styles.iconButton, styles[size], styles[color], signal && styles[signal], fullWidth && styles.fullWidth), onClick: onClick, disabled: signal === 'disabled', children: _jsx("span", { className: styles.icon, children: children }) }));
};
