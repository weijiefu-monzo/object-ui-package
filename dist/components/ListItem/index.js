import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import styles from './ListItem.module.css';
import clsx from 'clsx';
export const ListItem = ({ avatar, label, description, action, onClick, outlined = false }) => {
    const handleActionClick = (e) => {
        e.stopPropagation();
    };
    return (_jsxs("li", { className: clsx(styles.listItem, onClick && styles.clickable, outlined && styles.outlined), onClick: onClick, children: [avatar && _jsx("div", { className: styles.avatar, children: avatar }), _jsxs("div", { className: styles.content, children: [label && _jsx("div", { className: styles.label, children: label }), description && _jsx("div", { className: styles.description, children: description })] }), action && (_jsx("div", { className: styles.action, onClick: handleActionClick, children: action }))] }));
};
