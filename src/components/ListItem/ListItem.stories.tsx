import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
// Mock function for actions
const fn = () => console.log("action fired");
import { ListItem, ListItemProps } from "./index";
import { IconButton } from "../IconButton";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMore,
  AiOutlineDelete,
} from "react-icons/ai";

const meta = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    outlined: { control: "boolean" },
  },
} satisfies Meta<ListItemProps>;

export default meta;
type Story = StoryObj<ListItemProps>;

export const Default: Story = {
  args: {
    label: "List Item",
    description: "This is a description for the list item",
  },
  tags: ["!dev"],
};

export const WithAvatar: Story = {
  args: {
    label: "John Doe",
    description: "Software Engineer",
  },
  render: (args) => <ListItem {...args} avatar={<AiOutlineUser size={20} />} />,
  tags: ["!dev"],
};

export const WithAction: Story = {
  args: {
    label: "Favorite Item",
    description: "Click the heart to favorite this item",
  },
  render: (args) => (
    <ListItem
      {...args}
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineHeart />
        </IconButton>
      }
    />
  ),
  tags: ["!dev"],
};

export const ComplexItem: Story = {
  args: {
    label: "Jane Smith",
    description: "Product Manager at Tech Corp",
  },
  render: (args) => (
    <ListItem
      {...args}
      avatar={<AiOutlineUser size={20} />}
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineMore />
        </IconButton>
      }
    />
  ),
  tags: ["!dev"],
};

export const Clickable: Story = {
  args: {
    label: "Clickable Item",
    description: "This entire item is clickable",
    onClick: fn,
  },
  render: (args) => <ListItem {...args} avatar={<AiOutlineUser size={20} />} />,
  tags: ["!dev"],
};

export const Outlined: Story = {
  args: {
    outlined: true,
    label: "Outlined Item",
    description: "This item has an outline",
  },
  render: (args) => (
    <ListItem
      {...args}
      avatar={<AiOutlineUser size={20} />}
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineDelete />
        </IconButton>
      }
    />
  ),
  tags: ["!dev"],
};
