import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
// Mock function for actions
const fn = () => console.log("action fired");
import { Button, ButtonProps } from "./index";
import { ComponentChildren } from "preact";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    signal: {
      control: { type: "select" },
      options: ["neutral", "success", "warning", "error"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  args: { onClick: fn },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
  },
  tags: ["!dev"],
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary Button",
  },
  tags: ["!dev"],
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Secondary Button",
  },
  tags: ["!dev"],
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
  tags: ["!dev"],
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
  tags: ["!dev"],
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
  tags: ["!dev"],
};

export const WithStartIcon: Story = {
  args: {
    children: "With Icon",
    startIcon: (<AiOutlinePlus />) as ComponentChildren,
  },
  tags: ["!dev"],
};

export const WithEndIcon: Story = {
  args: {
    children: "With Icon",
    endIcon: (<AiOutlineHeart />) as ComponentChildren,
  },
  tags: ["!dev"],
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
  tags: ["!dev"],
};

export const Success: Story = {
  args: {
    children: "Success",
    signal: "success",
  },
  tags: ["!dev"],
};

export const Warning: Story = {
  args: {
    children: "Warning",
    signal: "warning",
  },
  tags: ["!dev"],
};

export const Error: Story = {
  args: {
    children: "Error",
    signal: "error",
  },
  tags: ["!dev"],
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  tags: ["!dev"],
};
