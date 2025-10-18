import * as React from 'react';
import type { StoryObj } from '@storybook/preact-vite';
import { ModalProps } from './index';
declare const meta: {
    title: string;
    component: ({ children, title, isOpen, actions, onClose, }: ModalProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        isOpen: {
            control: "boolean";
        };
        title: {
            control: "text";
        };
    };
    args: {
        onClose: () => void;
    };
};
export default meta;
type Story = StoryObj<ModalProps>;
export declare const Default: Story;
