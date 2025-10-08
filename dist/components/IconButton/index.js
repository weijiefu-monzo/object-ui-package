import { h } from 'preact';
import styles from './IconButton.module.css';
import clsx from 'clsx';
export const IconButton = ({ size = 'medium', color = 'secondary', signal, children, fullWidth, onClick, }) => {
    return (h("button", { className: clsx(styles.iconButton, styles[size], styles[color], signal && styles[signal], fullWidth && styles.fullWidth), onClick: onClick, disabled: signal === 'disabled' },
        h("span", { className: styles.icon }, children)));
};
