import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { useId } from "preact/hooks";
import styles from "./TextField.module.css";
export const TextField = ({ id, label, placeholder, value, onChange, type, disabled, error, }) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (_jsxs("div", { className: styles.textField, children: [label && (_jsx("label", { className: styles.label, htmlFor: inputId, children: label })), _jsx("input", { id: inputId, className: `${styles.input} ${disabled ? styles.disabled : ""} ${error ? styles.error : ""}`, placeholder: placeholder, value: value, onChange: onChange, type: type, disabled: disabled }), error && _jsx("div", { className: styles.errorMessage, children: error })] }));
};
