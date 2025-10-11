import { jsx as _jsx } from "preact/jsx-runtime";
import styles from './Group.module.css';
import clsx from 'clsx';
export const Group = ({ wrap, children, fullWidth }) => {
    return (_jsx("div", { className: clsx(styles.group, wrap && styles.wrap, fullWidth && styles.fullWidth), children: children }));
};
