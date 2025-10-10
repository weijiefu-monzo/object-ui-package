import { h, ComponentChildren } from 'preact';
type ListItemProps = {
    avatar?: ComponentChildren;
    label?: string;
    description?: string;
    action?: ComponentChildren;
    onClick?: () => void;
    outlined?: boolean;
};
export declare const ListItem: ({ avatar, label, description, action, onClick, outlined }: ListItemProps) => h.JSX.Element;
export {};
