import { h } from 'preact';
import styles from './Group.module.css';
import clsx from 'clsx';
export const Group = ({ wrap, children, fullWidth }) => {
    return (h("div", { className: clsx(styles.group, wrap && styles.wrap, fullWidth && styles.fullWidth) }, children));
};
