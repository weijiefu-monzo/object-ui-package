import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { TextFieldProps } from "./index";
declare const meta: {
    title: string;
    component: ({ id, label, placeholder, value, onChange, type, disabled, error, }: TextFieldProps) => React.JSX.Element;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<TextFieldProps>;
export declare const DesignOverview: Story;
export declare const InputTypes: Story;
export declare const States: Story;
export declare const FormIntegration: Story;
