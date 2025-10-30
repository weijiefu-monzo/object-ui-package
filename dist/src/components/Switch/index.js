import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import styles from "./Switch.module.css";
import clsx from "clsx";
export const Switch = ({ checked, onChange, disabled }) => {
    return (_jsx("div", { className: clsx(styles.switch, checked && styles.checked, disabled && styles.disabled), onClick: () => !disabled && onChange(!checked), children: _jsxs("div", { className: styles.track, children: [_jsx("div", { className: styles.thumb }), _jsxs("div", { className: styles.status, children: [" ", checked ? "On" : "Off", " "] })] }) }));
};
