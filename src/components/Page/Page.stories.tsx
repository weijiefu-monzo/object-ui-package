import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Page, PageProps } from "./index";
// Mock function for actions
const fn = () => console.log("action fired");

const meta = {
  title: "Components/Page/Code",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Page {...args}>
      <div style={{ padding: "24px" }}>
        <p>This is the basic page wrapper component.</p>
      </div>
    </Page>
  ),
  tags: ["!dev"],
};
