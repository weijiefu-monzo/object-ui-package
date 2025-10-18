import { jsx as _jsx } from "preact/jsx-runtime";
import { useState } from 'preact/hooks';
// Mock function for actions
const fn = () => console.log('action fired');
import { Switch } from './index';
const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean' },
    },
    args: {
        onChange: fn,
    },
};
export default meta;
export const Default = {
    args: {
        checked: false,
    },
};
export const Checked = {
    args: {
        checked: true,
    },
};
export const Interactive = {
    args: {
        checked: false,
    },
    render: (args) => {
        const [checked, setChecked] = useState(args.checked || false);
        return (_jsx(Switch, { checked: checked, onChange: (newChecked) => {
                setChecked(newChecked);
                args.onChange?.(newChecked);
            } }));
    },
};
