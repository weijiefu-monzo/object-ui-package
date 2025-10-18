import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Group, GroupProps } from "./index";
import { Button } from "../Button";
// Mock function for actions
const fn = () => console.log("action fired");

const meta = {
  title: "Components/Group/Code",
  component: Group,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    wrap: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<GroupProps>;

export default meta;
type Story = StoryObj<GroupProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Group {...args}>
      <Button onClick={fn}>Button 1</Button>
      <Button onClick={fn}>Button 2</Button>
      <Button onClick={fn}>Button 3</Button>
    </Group>
  ),
  tags: ["!dev"],
};

export const Wrap: Story = {
  args: {
    wrap: true,
  },
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <Group {...args}>
      <Button onClick={fn}>Button 1</Button>
      <Button onClick={fn}>Button 2</Button>
      <Button onClick={fn}>Button 3</Button>
      <Button onClick={fn}>Button 4</Button>
      <Button onClick={fn}>Button 5</Button>
      <Button onClick={fn}>Button 6</Button>
      <Button onClick={fn}>Button 7</Button>
      <Button onClick={fn}>Button 8</Button>
      <Button onClick={fn}>Button 9</Button>
      <Button onClick={fn}>Button 10</Button>
      <Button onClick={fn}>Button 11</Button>
      <Button onClick={fn}>Button 12</Button>
      <Button onClick={fn}>Button 13</Button>
      <Button onClick={fn}>Button 14</Button>
      <Button onClick={fn}>Button 15</Button>
      <Button onClick={fn}>Button 16</Button>
    </Group>
  ),
  tags: ["!dev"],
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <Group {...args}>
      <Button onClick={fn}>Button 1</Button>
      <Button onClick={fn}>Button 2</Button>
      <Button onClick={fn}>Button 3</Button>
    </Group>
  ),
  tags: ["!dev"],
};
