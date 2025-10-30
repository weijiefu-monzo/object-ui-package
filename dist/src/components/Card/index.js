import { jsx as _jsx } from "preact/jsx-runtime";
import styles from "./Card.module.css";
import clsx from "clsx";
export const Card = ({ children, className }) => {
    return _jsx("div", { className: clsx(styles.card, className), children: children });
};
