import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Group } from './index';
import { Button } from '../Button';
// Mock function for actions
const fn = () => console.log('action fired');
const meta = {
    title: 'Components/Group',
    component: Group,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        wrap: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
    },
};
export default meta;
export const Default = {
    args: {},
    render: (args) => (_jsxs(Group, { ...args, children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" })] })),
};
export const Wrap = {
    args: {
        wrap: true,
    },
    parameters: {
        layout: 'padded',
    },
    render: (args) => (_jsxs(Group, { ...args, children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" }), _jsx(Button, { onClick: fn, children: "Button 4" }), _jsx(Button, { onClick: fn, children: "Button 5" }), _jsx(Button, { onClick: fn, children: "Button 6" }), _jsx(Button, { onClick: fn, children: "Button 7" }), _jsx(Button, { onClick: fn, children: "Button 8" }), _jsx(Button, { onClick: fn, children: "Button 9" }), _jsx(Button, { onClick: fn, children: "Button 10" }), _jsx(Button, { onClick: fn, children: "Button 11" }), _jsx(Button, { onClick: fn, children: "Button 12" }), _jsx(Button, { onClick: fn, children: "Button 13" }), _jsx(Button, { onClick: fn, children: "Button 14" }), _jsx(Button, { onClick: fn, children: "Button 15" }), _jsx(Button, { onClick: fn, children: "Button 16" })] })),
};
export const FullWidth = {
    args: {
        fullWidth: true,
    },
    parameters: {
        layout: 'padded',
    },
    render: (args) => (_jsxs(Group, { ...args, children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" })] })),
};
