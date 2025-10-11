import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import clsx from 'clsx';
import styles from './Modal.module.css';
import { IconButton } from '../IconButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Group } from '../Group';
export const Modal = ({ children, title, isOpen, actions, onClose, }) => {
    return (_jsx("div", { className: clsx(styles.modal, isOpen && styles.open), children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.header, children: [_jsx("h2", { children: title }), _jsx(IconButton, { size: "small", onClick: onClose, children: _jsx(AiOutlineClose, {}) })] }), _jsx("div", { className: styles.content, children: children }), _jsx("div", { className: styles.actions, children: _jsx(Group, { fullWidth: true, children: actions }) })] }) }));
};
