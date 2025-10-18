import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from 'react';
// Mock function for actions
const fn = () => console.log('action fired');
import { Modal } from './index';
import { Button } from '../Button';
import { Group } from '../Group';
const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
    },
    args: {
        onClose: fn,
    },
};
export default meta;
export const Default = {
    args: {
        title: 'Default Modal',
    },
    render: (args) => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs("div", { style: { padding: '24px', height: '640px' }, children: [_jsx(Button, { color: "primary", onClick: () => setOpen(true), children: "Open Modal" }), _jsx(Modal, { ...args, isOpen: open, onClose: () => setOpen(false), children: _jsx("p", { children: "This is the content of the modal. You can put any component here." }), actions: _jsxs(Group, { fullWidth: true, children: [_jsx(Button, { fullWidth: true, onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { fullWidth: true, color: "primary", onClick: fn, children: "Confirm" })] }) })] }));
    },
};
