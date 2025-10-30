import * as React from "react";
import type { StoryObj } from "@storybook/preact-vite";
import { PageProps } from "./index";
declare const meta: {
    title: string;
    component: ({ children }: PageProps) => React.JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<PageProps>;
export declare const Default: Story;
