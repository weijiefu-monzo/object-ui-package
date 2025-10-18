import { jsx as _jsx } from "preact/jsx-runtime";
// Mock function for actions
const fn = () => console.log("action fired");
import { Button } from "./index";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        color: {
            control: { type: "select" },
            options: ["primary", "secondary"],
        },
        signal: {
            control: { type: "select" },
            options: ["neutral", "success", "warning", "error"],
        },
        disabled: { control: "boolean" },
        fullWidth: { control: "boolean" },
    },
    args: { onClick: fn },
};
export default meta;
export const Default = {
    args: {
        children: "Button",
    },
};
export const Primary = {
    args: {
        color: "primary",
        children: "Primary Button",
    },
};
export const Secondary = {
    args: {
        color: "secondary",
        children: "Secondary Button",
    },
};
export const Small = {
    args: {
        size: "small",
        children: "Small Button",
    },
};
export const Medium = {
    args: {
        size: "medium",
        children: "Medium Button",
    },
};
export const Large = {
    args: {
        size: "large",
        children: "Large Button",
    },
};
export const WithStartIcon = {
    args: {
        children: "With Icon",
        startIcon: (_jsx(AiOutlinePlus, {})),
    },
};
export const WithEndIcon = {
    args: {
        children: "With Icon",
        endIcon: (_jsx(AiOutlineHeart, {})),
    },
};
export const FullWidth = {
    args: {
        children: "Full Width Button",
        fullWidth: true,
    },
    parameters: {
        layout: "padded",
    },
};
export const Success = {
    args: {
        children: "Success",
        signal: "success",
    },
};
export const Warning = {
    args: {
        children: "Warning",
        signal: "warning",
    },
};
export const Error = {
    args: {
        children: "Error",
        signal: "error",
    },
};
export const Disabled = {
    args: {
        children: "Disabled",
        disabled: true,
    },
};
