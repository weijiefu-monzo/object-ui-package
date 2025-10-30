import { jsx as _jsx } from "preact/jsx-runtime";
import * as React from "react";
import { Checkbox } from "./index";
const meta = {
    title: "Components/Checkbox/Code",
    component: Checkbox,
    argTypes: {
        label: { control: "text" },
        checked: { control: "boolean" },
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: { label: "I agree" },
    render: (args) => {
        const [checked, setChecked] = React.useState(false);
        return (_jsx(Checkbox, { ...args, checked: checked, onChange: (val) => setChecked(val) }));
    },
    tags: ["!dev"],
};
