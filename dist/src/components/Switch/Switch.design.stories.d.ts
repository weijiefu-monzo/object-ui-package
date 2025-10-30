import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { SwitchProps } from "./index";
declare const meta: {
    title: string;
    component: ({ checked, onChange, disabled }: SwitchProps) => React.JSX.Element;
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
type Story = StoryObj<SwitchProps>;
export declare const DesignOverview: Story;
export declare const States: Story;
export declare const InteractiveExample: Story;
export declare const FormIntegration: Story;
