import * as React from 'react';
import type { StoryObj } from '@storybook/preact-vite';
import { SwitchProps } from './index';
declare const meta: {
    title: string;
    component: ({ checked, onChange }: SwitchProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        checked: {
            control: "boolean";
        };
    };
    args: {
        onChange: () => void;
    };
};
export default meta;
type Story = StoryObj<SwitchProps>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Interactive: Story;
