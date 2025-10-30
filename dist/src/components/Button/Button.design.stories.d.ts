import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { ButtonProps } from "./index";
declare const meta: {
    title: string;
    component: ({ size, color, startIcon, endIcon, signal, fullWidth, onClick, children, disabled, }: ButtonProps) => React.JSX.Element;
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
type Story = StoryObj<ButtonProps>;
export declare const DesignOverview: Story;
export declare const SizeVariants: Story;
export declare const ColorVariants: Story;
export declare const SignalVariants: Story;
export declare const WithIcons: Story;
export declare const States: Story;
