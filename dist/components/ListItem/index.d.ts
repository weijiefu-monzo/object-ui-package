import { h, ComponentChildren } from 'preact';
type ListItemProps = {
    avatar?: ComponentChildren;
    label?: string;
    description?: string;
    action?: ComponentChildren;
    onClick?: () => void;
};
export declare const ListItem: ({ avatar, label, description, action, onClick, }: ListItemProps) => h.JSX.Element;
export {};
