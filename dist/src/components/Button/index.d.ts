import { h, ComponentChildren } from 'preact';
export type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    children: string;
    onClick: () => void;
    startIcon?: ComponentChildren;
    endIcon?: ComponentChildren;
    signal?: 'neutral' | 'success' | 'warning' | 'error';
    disabled?: boolean;
    fullWidth?: boolean;
};
export declare const Button: ({ size, color, startIcon, endIcon, signal, fullWidth, onClick, children, disabled, }: ButtonProps) => h.JSX.Element;
