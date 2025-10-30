import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { PageProps } from "./index";
declare const meta: {
    title: string;
    component: ({ children }: PageProps) => React.JSX.Element;
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
type Story = StoryObj<PageProps>;
export declare const DesignOverview: Story;
export declare const LayoutPatterns: Story;
export declare const ContentTypes: Story;
export declare const States: Story;
