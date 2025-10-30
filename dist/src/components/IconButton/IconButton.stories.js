import { jsx as _jsx } from "preact/jsx-runtime";
// Mock function for actions
const fn = () => console.log("action fired");
import { IconButton } from "./index";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
const meta = {
    title: "Components/IconButton/Code",
    component: IconButton,
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
            options: ["disabled", "success", "warning", "error"],
        },
        fullWidth: { control: "boolean" },
    },
    args: { onClick: fn },
};
export default meta;
export const Default = {
    args: {},
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineHeart, {}) })),
    tags: ["!dev"],
};
export const Primary = {
    args: {
        color: "primary",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlinePlus, {}) })),
    tags: ["!dev"],
};
export const Secondary = {
    args: {
        color: "secondary",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineClose, {}) })),
    tags: ["!dev"],
};
export const Small = {
    args: {
        size: "small",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineClose, {}) })),
    tags: ["!dev"],
};
export const Medium = {
    args: {
        size: "medium",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineClose, {}) })),
    tags: ["!dev"],
};
export const Large = {
    args: {
        size: "large",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineClose, {}) })),
    tags: ["!dev"],
};
export const Success = {
    args: {
        signal: "success",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlinePlus, {}) })),
    tags: ["!dev"],
};
export const Warning = {
    args: {
        signal: "warning",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineClose, {}) })),
    tags: ["!dev"],
};
export const Error = {
    args: {
        signal: "error",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineClose, {}) })),
    tags: ["!dev"],
};
export const Disabled = {
    args: {
        signal: "disabled",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineHeart, {}) })),
    tags: ["!dev"],
};
export const FullWidth = {
    args: {
        fullWidth: true,
    },
    parameters: {
        layout: "padded",
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineHeart, {}) })),
    tags: ["!dev"],
};
