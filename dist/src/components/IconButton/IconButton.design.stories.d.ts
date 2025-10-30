import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { IconButtonProps } from "./index";
declare const meta: {
    title: string;
    component: ({ size, color, signal, children, fullWidth, onClick, }: IconButtonProps) => React.JSX.Element;
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
type Story = StoryObj<IconButtonProps>;
export declare const DesignOverview: Story;
export declare const SizeVariants: Story;
export declare const ColorVariants: Story;
export declare const SignalVariants: Story;
export declare const CommonIcons: Story;
export declare const States: Story;
