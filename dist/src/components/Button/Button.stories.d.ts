import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { ButtonProps } from "./index";
declare const meta: {
    title: string;
    component: ({ size, color, startIcon, endIcon, signal, fullWidth, onClick, children, disabled, }: ButtonProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        size: {
            control: {
                type: "select";
            };
            options: string[];
        };
        color: {
            control: {
                type: "select";
            };
            options: string[];
        };
        signal: {
            control: {
                type: "select";
            };
            options: string[];
        };
        disabled: {
            control: "boolean";
        };
        fullWidth: {
            control: "boolean";
        };
    };
    args: {
        onClick: () => void;
    };
};
export default meta;
type Story = StoryObj<ButtonProps>;
export declare const Default: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const WithStartIcon: Story;
export declare const WithEndIcon: Story;
export declare const FullWidth: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Error: Story;
export declare const Disabled: Story;
