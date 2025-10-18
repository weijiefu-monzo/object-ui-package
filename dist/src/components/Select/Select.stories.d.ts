import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { SelectProps } from "./index";
declare const meta: {
    title: string;
    component: ({ id, label, placeholder, options, value, onChange, }: SelectProps) => React.JSX.Element;
    argTypes: {
        label: {
            control: "text";
        };
        placeholder: {
            control: "text";
        };
        value: {
            control: "text";
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<SelectProps>;
export declare const Default: Story;
