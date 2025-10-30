import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { GroupProps } from "./index";
declare const meta: {
    title: string;
    component: ({ wrap, children, fullWidth }: GroupProps) => React.JSX.Element;
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
type Story = StoryObj<GroupProps>;
export declare const DesignOverview: Story;
export declare const LayoutVariants: Story;
export declare const FullWidthVariants: Story;
export declare const ResponsiveExample: Story;
