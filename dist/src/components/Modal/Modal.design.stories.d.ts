import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { ModalProps } from "./index";
declare const meta: {
    title: string;
    component: ({ children, title, isOpen, actions, onClose, }: ModalProps) => React.JSX.Element;
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
type Story = StoryObj<ModalProps>;
export declare const DesignOverview: Story;
export declare const ContentTypes: Story;
export declare const InteractionPatterns: Story;
export declare const States: Story;
