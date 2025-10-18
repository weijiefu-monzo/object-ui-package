import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Group, GroupProps } from "./index";
import { Button } from "../Button";
// Mock function for actions
const fn = () => console.log("action fired");

const meta = {
  title: "Components/Group/Design",
  component: Group,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Overview
The Group component is a layout container that arranges child elements in a flexible, responsive manner.

## Design Principles

### Layout Flexibility
- Automatically arranges children in a row by default
- Supports wrapping for responsive behavior
- Maintains consistent spacing between elements

### Responsive Behavior
- Adapts to container width
- Wraps content when space is limited
- Maintains visual hierarchy

## States

#### Default State
- Children arranged horizontally
- Consistent spacing between elements
- No wrapping by default

#### Wrap State
- Children wrap to new lines when space is limited
- Maintains consistent spacing
- Responsive to container width

#### Full Width State
- Children expand to fill available width
- Equal distribution of space
- Maintains proper spacing

## Usage Guidelines

### When to Use
- Grouping related buttons or controls
- Creating button groups
- Organizing form elements
- Creating navigation bars
- Layout containers for related content

### When Not to Use
- For complex grid layouts (use CSS Grid)
- For single elements
- When vertical stacking is needed (use flexbox column)

## Variants

### Wrap Variant
- **Enabled**: Children wrap to new lines when needed
- **Disabled**: Children stay on single line (default)

### Full Width Variant
- **Enabled**: Children expand to fill container width
- **Disabled**: Children maintain natural width (default)

## Best Practices

1. **Consistency**: Use consistent spacing and alignment
2. **Responsiveness**: Enable wrapping for mobile layouts
3. **Accessibility**: Ensure proper focus management
4. **Visual Hierarchy**: Group related elements logically
5. **Spacing**: Maintain adequate spacing between elements
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<GroupProps>;

export default meta;
type Story = StoryObj<GroupProps>;

export const DesignOverview: Story = {
  args: {},
  render: (args) => (
    <Group {...args}>
      <Button onClick={fn}>Button 1</Button>
      <Button onClick={fn}>Button 2</Button>
      <Button onClick={fn}>Button 3</Button>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic group design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const LayoutVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4>Default (No Wrap)</h4>
        <Group>
          <Button onClick={fn}>Button 1</Button>
          <Button onClick={fn}>Button 2</Button>
          <Button onClick={fn}>Button 3</Button>
          <Button onClick={fn}>Button 4</Button>
          <Button onClick={fn}>Button 5</Button>
        </Group>
      </div>
      <div>
        <h4>With Wrap</h4>
        <Group wrap>
          <Button onClick={fn}>Button 1</Button>
          <Button onClick={fn}>Button 2</Button>
          <Button onClick={fn}>Button 3</Button>
          <Button onClick={fn}>Button 4</Button>
          <Button onClick={fn}>Button 5</Button>
        </Group>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Different layout variants showing wrap behavior.",
      },
    },
  },
  tags: ["!dev"],
};

export const FullWidthVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4>Default Width</h4>
        <Group>
          <Button onClick={fn}>Button 1</Button>
          <Button onClick={fn}>Button 2</Button>
          <Button onClick={fn}>Button 3</Button>
        </Group>
      </div>
      <div>
        <h4>Full Width</h4>
        <Group fullWidth>
          <Button onClick={fn}>Button 1</Button>
          <Button onClick={fn}>Button 2</Button>
          <Button onClick={fn}>Button 3</Button>
        </Group>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Full width variants showing how children expand to fill available space.",
      },
    },
  },
  tags: ["!dev"],
};

export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ width: "300px", border: "1px solid #ccc", padding: "16px" }}>
      <h4>Responsive Group (300px width)</h4>
      <Group wrap>
        <Button onClick={fn}>Short</Button>
        <Button onClick={fn}>Medium Length</Button>
        <Button onClick={fn}>Very Long Button Text</Button>
        <Button onClick={fn}>Btn</Button>
        <Button onClick={fn}>Another Button</Button>
      </Group>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Example showing how the group adapts to different container widths.",
      },
    },
  },
  tags: ["!dev"],
};
