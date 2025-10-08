import { h } from 'preact';
import styles from './Switch.module.css';
import clsx from 'clsx';
export const Switch = ({ checked, onChange }) => {
    return (h("div", { className: clsx(styles.switch, checked && styles.checked), onClick: () => onChange(!checked) },
        h("div", { className: styles.track },
            h("div", { className: styles.thumb }),
            h("div", { className: styles.status },
                " ",
                checked ? 'On' : 'Off',
                " "))));
};
