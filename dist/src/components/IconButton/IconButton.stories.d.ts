import * as React from 'react';
import type { StoryObj } from '@storybook/preact-vite';
import { IconButtonProps } from './index';
declare const meta: {
    title: string;
    component: ({ size, color, signal, children, fullWidth, onClick, }: IconButtonProps) => React.JSX.Element;
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
        fullWidth: {
            control: "boolean";
        };
    };
    args: {
        onClick: () => void;
    };
};
export default meta;
type Story = StoryObj<IconButtonProps>;
export declare const Default: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Error: Story;
export declare const Disabled: Story;
export declare const FullWidth: Story;
