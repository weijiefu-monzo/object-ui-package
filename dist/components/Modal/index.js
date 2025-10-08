import { h } from 'preact';
import clsx from 'clsx';
import styles from './Modal.module.css';
import { IconButton } from '../IconButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Group } from '../Group';
export const Modal = ({ children, title, isOpen, actions, onClose, }) => {
    return (h("div", { className: clsx(styles.modal, isOpen && styles.open) },
        h("div", { className: styles.container },
            h("div", { className: styles.header },
                h("h2", null, title),
                h(IconButton, { size: "small", onClick: onClose },
                    h(AiOutlineClose, null))),
            h("div", { className: styles.content }, children),
            h("div", { className: styles.actions },
                h(Group, { fullWidth: true }, actions)))));
};
