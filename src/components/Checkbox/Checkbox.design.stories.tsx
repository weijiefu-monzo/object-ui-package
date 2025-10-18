import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Checkbox, CheckboxProps } from "./index";

const meta = {
  title: "Components/Checkbox/Design",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Overview
The Checkbox component allows users to select one or more options from a set of choices.

## Design Principles

### Visual Clarity
- Clear visual indication of checked/unchecked state
- Consistent sizing and spacing
- Proper alignment with labels

### Accessibility
- Sufficient color contrast
- Clear focus indicators
- Proper labeling for screen readers

## States

#### Unchecked State
- Empty checkbox with clear border
- Consistent with design system

#### Checked State
- Clear checkmark or indicator
- Visual feedback for selection

#### Disabled State
- Visually distinct from enabled state
- Clear indication of unavailability

## Usage Guidelines

### When to Use
- Multiple selection from a list
- Binary choices (on/off, yes/no)
- Terms and conditions acceptance
- Filter options

### When Not to Use
- Single selection (use radio buttons)
- Navigation (use links or buttons)
- Actions (use buttons)

## Best Practices

1. **Labeling**: Always provide clear, descriptive labels
2. **Grouping**: Group related checkboxes logically
3. **Spacing**: Provide adequate spacing between options
4. **Alignment**: Align checkboxes consistently
5. **Feedback**: Provide clear visual feedback for all states
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const DesignOverview: Story = {
  args: { id: "design-overview", label: "Design Overview" },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic checkbox design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox id="unchecked" label="Unchecked" />
      <Checkbox id="checked" label="Checked" checked />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different checkbox states and their visual representation.",
      },
    },
  },
  tags: ["!dev"],
};
