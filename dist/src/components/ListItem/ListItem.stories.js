import { jsx as _jsx } from "preact/jsx-runtime";
// Mock function for actions
const fn = () => console.log('action fired');
import { ListItem } from './index';
import { IconButton } from '../IconButton';
import { AiOutlineUser, AiOutlineHeart, AiOutlineMore, AiOutlineDelete } from 'react-icons/ai';
const meta = {
    title: 'Components/ListItem',
    component: ListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        outlined: { control: 'boolean' },
    },
};
export default meta;
export const Default = {
    args: {
        label: 'List Item',
        description: 'This is a description for the list item',
    },
};
export const WithAvatar = {
    args: {
        label: 'John Doe',
        description: 'Software Engineer',
    },
    render: (args) => (_jsx(ListItem, { ...args, avatar: _jsx(AiOutlineUser, { size: 20 }) })),
};
export const WithAction = {
    args: {
        label: 'Favorite Item',
        description: 'Click the heart to favorite this item',
    },
    render: (args) => (_jsx(ListItem, { ...args, action: _jsx(IconButton, { size: "small", onClick: fn, children: _jsx(AiOutlineHeart, {}) }) })),
};
export const ComplexItem = {
    args: {
        label: 'Jane Smith',
        description: 'Product Manager at Tech Corp',
    },
    render: (args) => (_jsx(ListItem, { ...args, avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: fn, children: _jsx(AiOutlineMore, {}) }) })),
};
export const Clickable = {
    args: {
        label: 'Clickable Item',
        description: 'This entire item is clickable',
        onClick: fn,
    },
    render: (args) => (_jsx(ListItem, { ...args, avatar: _jsx(AiOutlineUser, { size: 20 }) })),
};
export const Outlined = {
    args: {
        outlined: true,
        label: 'Outlined Item',
        description: 'This item has an outline',
    },
    render: (args) => (_jsx(ListItem, { ...args, avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: fn, children: _jsx(AiOutlineDelete, {}) }) })),
};
