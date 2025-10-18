import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Select, SelectProps } from "./index";

const meta = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<SelectProps>;

const sampleOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

export const Default: Story = {
  args: {
    label: "Fruit",
    placeholder: "Choose a fruit",
    options: sampleOptions,
  },
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Select
          {...args}
          value={value}
          onChange={(e) => setValue((e.target as HTMLSelectElement).value)}
        />
        <div>Current value: {value || "(none)"}</div>
      </div>
    );
  },
  tags: ["!dev"],
};
