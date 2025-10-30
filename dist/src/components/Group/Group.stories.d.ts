import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { GroupProps } from "./index";
declare const meta: {
    title: string;
    component: ({ wrap, children, fullWidth }: GroupProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        wrap: {
            control: "boolean";
        };
        fullWidth: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<GroupProps>;
export declare const Default: Story;
export declare const Wrap: Story;
export declare const FullWidth: Story;
