import { h } from 'preact';
import styles from './Page.module.css';
export const Page = ({ children }) => {
    return h("div", { className: styles.page }, children);
};
