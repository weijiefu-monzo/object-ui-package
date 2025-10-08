import { h } from 'preact';
import styles from './ListItem.module.css';
import clsx from 'clsx';
export const ListItem = ({ avatar, label, description, action, onClick, }) => {
    const handleActionClick = (e) => {
        e.stopPropagation();
    };
    return (h("li", { className: clsx(styles.listItem, onClick && styles.clickable), onClick: onClick },
        avatar && h("div", { className: styles.avatar }, avatar),
        h("div", { className: styles.content },
            label && h("div", { className: styles.label }, label),
            description && h("div", { className: styles.description }, description)),
        action && (h("div", { className: styles.action, onClick: handleActionClick }, action))));
};
