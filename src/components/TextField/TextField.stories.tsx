import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { TextField, TextFieldProps } from "./index";

const meta = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: { label: "Label" },
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <TextField
          {...args}
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        />
        <div>Current value: {value}</div>
      </div>
    );
  },
};
