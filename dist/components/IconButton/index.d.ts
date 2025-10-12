import { h, ComponentChildren } from 'preact';
export type IconButtonProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    children: ComponentChildren;
    onClick: () => void;
    signal?: 'disabled' | 'success' | 'warning' | 'error';
    fullWidth?: boolean;
};
export declare const IconButton: ({ size, color, signal, children, fullWidth, onClick, }: IconButtonProps) => h.JSX.Element;
