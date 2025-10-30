import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from "react";
import { TextField } from "./index";
const meta = {
    title: "Components/TextField/Code",
    component: TextField,
    argTypes: {
        label: { control: "text" },
        placeholder: { control: "text" },
        value: { control: "text" },
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: { label: "Label" },
    render: (args) => {
        const [value, setValue] = React.useState("");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 32 }, children: [_jsx(TextField, { ...args, value: value, onChange: (e) => setValue(e.target.value) }), _jsxs("div", { children: ["Current value: ", value] })] }));
    },
    tags: ["!dev"],
};
