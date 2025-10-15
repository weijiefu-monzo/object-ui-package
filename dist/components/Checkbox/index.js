import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { useId } from "preact/hooks";
import styles from "./Checkbox.module.css";
export const Checkbox = ({ id, label, checked, onChange }) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    return (_jsxs("label", { className: styles.checkbox, htmlFor: inputId, children: [_jsx("input", { id: inputId, type: "checkbox", className: styles.input, checked: !!checked, onChange: (e) => onChange?.(e.target.checked) }), _jsx("span", { className: styles.box, "aria-hidden": "true" }), label && _jsx("span", { className: styles.label, children: label })] }));
};
