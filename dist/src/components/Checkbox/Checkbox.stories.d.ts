import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { CheckboxProps } from "./index";
declare const meta: {
    title: string;
    component: ({ id, label, checked, onChange }: CheckboxProps) => React.JSX.Element;
    argTypes: {
        label: {
            control: "text";
        };
        checked: {
            control: "boolean";
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<CheckboxProps>;
export declare const Default: Story;
