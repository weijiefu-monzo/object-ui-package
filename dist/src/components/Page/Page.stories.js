import { jsx as _jsx } from "preact/jsx-runtime";
import { Page } from './index';
// Mock function for actions
const fn = () => console.log('action fired');
const meta = {
    title: 'Components/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {},
    render: (args) => (_jsx(Page, { ...args, children: _jsx("div", { style: { padding: '24px' }, children: _jsx("p", { children: "This is the basic page wrapper component." }) }) })),
};
