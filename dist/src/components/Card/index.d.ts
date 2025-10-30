import { h, ComponentChildren } from "preact";
export type CardProps = {
    children: ComponentChildren;
    className?: string;
};
export declare const Card: ({ children, className }: CardProps) => h.JSX.Element;
