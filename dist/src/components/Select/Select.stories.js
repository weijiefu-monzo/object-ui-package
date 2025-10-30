import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from "react";
import { Select } from "./index";
const meta = {
    title: "Components/Select/Code",
    component: Select,
    argTypes: {
        label: { control: "text" },
        placeholder: { control: "text" },
        value: { control: "text" },
    },
    tags: ["autodocs"],
};
export default meta;
const sampleOptions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
];
export const Default = {
    args: {
        label: "Fruit",
        placeholder: "Choose a fruit",
        options: sampleOptions,
    },
    render: (args) => {
        const [value, setValue] = React.useState("");
        return (_jsxs("div", { style: {
                display: "flex",
                flexDirection: "column",
                gap: 32,
            }, children: [_jsx(Select, { ...args, value: value, onChange: (e) => setValue(e.target.value) }), _jsxs("div", { children: ["Current value: ", value || "(none)"] })] }));
    },
    tags: ["!dev"],
};
