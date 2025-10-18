import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Checkbox, CheckboxProps } from "./index";

const meta = {
  title: "Components/Checkbox/Code",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
  },
  tags: ["autodocs"],
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: { label: "I agree" },
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(val) => setChecked(val)}
      />
    );
  },
  tags: ["!dev"],
};
