import * as React from 'react';
import type { StoryObj } from '@storybook/preact-vite';
import { ListItemProps } from './index';
declare const meta: {
    title: string;
    component: ({ avatar, label, description, action, onClick, outlined }: ListItemProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        outlined: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<ListItemProps>;
export declare const Default: Story;
export declare const WithAvatar: Story;
export declare const WithAction: Story;
export declare const ComplexItem: Story;
export declare const Clickable: Story;
export declare const Outlined: Story;
