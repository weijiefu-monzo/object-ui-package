import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { ListItemProps } from "./index";
declare const meta: {
    title: string;
    component: ({ avatar, label, description, action, onClick, outlined }: ListItemProps) => React.JSX.Element;
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
type Story = StoryObj<ListItemProps>;
export declare const DesignOverview: Story;
export declare const ContentVariants: Story;
export declare const LayoutVariants: Story;
export declare const UserListExample: Story;
export declare const States: Story;
