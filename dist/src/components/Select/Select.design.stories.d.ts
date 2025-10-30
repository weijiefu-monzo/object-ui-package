import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { SelectProps } from "./index";
declare const meta: {
    title: string;
    component: ({ id, label, placeholder, options, value, onChange, disabled, }: SelectProps) => React.JSX.Element;
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
type Story = StoryObj<SelectProps>;
export declare const DesignOverview: Story;
export declare const OptionTypes: Story;
export declare const States: Story;
export declare const FormIntegration: Story;
