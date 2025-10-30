import { jsx as _jsx } from "preact/jsx-runtime";
// Mock function for actions
const fn = () => console.log("action fired");
import { Button } from "./index";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
const meta = {
    title: "Components/Button/Code",
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
    tags: ["!dev"],
};
export const Primary = {
    args: {
        color: "primary",
        children: "Primary Button",
    },
    tags: ["!dev"],
};
export const Secondary = {
    args: {
        color: "secondary",
        children: "Secondary Button",
    },
    tags: ["!dev"],
};
export const Small = {
    args: {
        size: "small",
        children: "Small Button",
    },
    tags: ["!dev"],
};
export const Medium = {
    args: {
        size: "medium",
        children: "Medium Button",
    },
    tags: ["!dev"],
};
export const Large = {
    args: {
        size: "large",
        children: "Large Button",
    },
    tags: ["!dev"],
};
export const WithStartIcon = {
    args: {
        children: "With Icon",
        startIcon: (_jsx(AiOutlinePlus, {})),
    },
    tags: ["!dev"],
};
export const WithEndIcon = {
    args: {
        children: "With Icon",
        endIcon: (_jsx(AiOutlineHeart, {})),
    },
    tags: ["!dev"],
};
export const FullWidth = {
    args: {
        children: "Full Width Button",
        fullWidth: true,
    },
    parameters: {
        layout: "padded",
    },
    tags: ["!dev"],
};
export const Success = {
    args: {
        children: "Success",
        signal: "success",
    },
    tags: ["!dev"],
};
export const Warning = {
    args: {
        children: "Warning",
        signal: "warning",
    },
    tags: ["!dev"],
};
export const Error = {
    args: {
        children: "Error",
        signal: "error",
    },
    tags: ["!dev"],
};
export const Disabled = {
    args: {
        children: "Disabled",
        disabled: true,
    },
    tags: ["!dev"],
};
