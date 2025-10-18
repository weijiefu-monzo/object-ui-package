import { jsx as _jsx } from "preact/jsx-runtime";
import styles from './Page.module.css';
export const Page = ({ children }) => {
    return _jsx("div", { className: styles.page, children: children });
};
