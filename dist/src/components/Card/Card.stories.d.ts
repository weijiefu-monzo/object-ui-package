import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { CardProps } from "./index";
declare const meta: {
    title: string;
    component: ({ children, className }: CardProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        className: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<CardProps>;
export declare const Default: Story;
export declare const WithContent: Story;
export declare const WithCustomClassName: Story;
