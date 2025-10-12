import { jsx as _jsx } from "preact/jsx-runtime";
import styles from './TextField.module.css';
export const TextField = ({ placeholder, value, onChange }) => {
    return _jsx("div", { className: styles.textField, children: _jsx("input", { className: styles.input, placeholder: placeholder, value: value, onChange: onChange }) });
};
