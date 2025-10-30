import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { TextFieldProps } from "./index";
declare const meta: {
    title: string;
    component: ({ id, label, placeholder, value, onChange, type, disabled, error, }: TextFieldProps) => React.JSX.Element;
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
type Story = StoryObj<TextFieldProps>;
export declare const Default: Story;
