import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { useId } from "preact/hooks";
import styles from "./Select.module.css";
export const Select = ({ id, label, placeholder, options, value, onChange, }) => {
    const hasValue = value !== undefined && value !== "";
    const generatedId = useId();
    const selectId = id ?? generatedId;
    return (_jsxs("div", { className: styles.field, children: [label && (_jsx("label", { className: styles.label, htmlFor: selectId, children: label })), _jsxs("select", { id: selectId, className: `${styles.select} ${!hasValue ? styles.placeholder : ""}`, value: value ?? "", onChange: onChange, children: [placeholder && !hasValue && (_jsx("option", { value: "", disabled: true, hidden: true, children: placeholder })), options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] })] }));
};
