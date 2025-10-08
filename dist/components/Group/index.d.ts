import { h, ComponentChildren } from 'preact';
type GroupProps = {
    wrap?: boolean;
    children: ComponentChildren;
    fullWidth?: boolean;
};
export declare const Group: ({ wrap, children, fullWidth }: GroupProps) => h.JSX.Element;
export {};
