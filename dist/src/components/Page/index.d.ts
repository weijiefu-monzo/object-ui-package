import { h, ComponentChildren } from 'preact';
export type PageProps = {
    children?: ComponentChildren;
};
export declare const Page: ({ children }: PageProps) => h.JSX.Element;
