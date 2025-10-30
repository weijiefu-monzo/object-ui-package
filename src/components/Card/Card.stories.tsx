import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Card, CardProps } from "./index";
import { Button } from "../Button";
// Mock function for actions
const fn = () => console.log("action fired");

const meta = {
  title: "Components/Card/Code",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <div style={{ padding: "24px" }}>
        <h3 style={{ margin: "0 0 12px 0" }}>Card Title</h3>
        <p style={{ margin: 0 }}>
          This is a basic card component with some content.
        </p>
      </div>
    </Card>
  ),
  tags: ["!dev"],
};

export const WithContent: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <div style={{ padding: "24px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>Card with Content</h3>
        <p style={{ margin: "0 0 16px 0", color: "var(--grey-800)" }}>
          Cards are used to group related content together in a visually
          distinct container.
        </p>
        <Button onClick={fn}>Action Button</Button>
      </div>
    </Card>
  ),
  tags: ["!dev"],
};

export const WithCustomClassName: Story = {
  args: {
    className: "custom-card",
  },
  render: (args) => (
    <Card {...args}>
      <div style={{ padding: "24px" }}>
        <p style={{ margin: 0 }}>
          Card with custom className for additional styling.
        </p>
      </div>
    </Card>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["!dev"],
};
