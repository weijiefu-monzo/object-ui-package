import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Card } from "./index";
import { Button } from "../Button";
// Mock function for actions
const fn = () => console.log("action fired");
const meta = {
    title: "Components/Card/Code",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        className: { control: "text" },
    },
};
export default meta;
export const Default = {
    args: {},
    render: (args) => (_jsx(Card, { ...args, children: _jsxs("div", { style: { padding: "24px" }, children: [_jsx("h3", { style: { margin: "0 0 12px 0" }, children: "Card Title" }), _jsx("p", { style: { margin: 0 }, children: "This is a basic card component with some content." })] }) })),
    tags: ["!dev"],
};
export const WithContent = {
    args: {},
    render: (args) => (_jsx(Card, { ...args, children: _jsxs("div", { style: { padding: "24px" }, children: [_jsx("h3", { style: { margin: "0 0 8px 0" }, children: "Card with Content" }), _jsx("p", { style: { margin: "0 0 16px 0", color: "var(--grey-800)" }, children: "Cards are used to group related content together in a visually distinct container." }), _jsx(Button, { onClick: fn, children: "Action Button" })] }) })),
    tags: ["!dev"],
};
export const WithCustomClassName = {
    args: {
        className: "custom-card",
    },
    render: (args) => (_jsx(Card, { ...args, children: _jsx("div", { style: { padding: "24px" }, children: _jsx("p", { style: { margin: 0 }, children: "Card with custom className for additional styling." }) }) })),
    parameters: {
        layout: "centered",
    },
    tags: ["!dev"],
};
