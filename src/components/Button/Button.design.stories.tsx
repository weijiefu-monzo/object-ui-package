import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Button, ButtonProps } from "./index";
import { ComponentChildren } from "preact";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";

const meta = {
  title: "Components/Button/Design",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Overview
The Button component is a fundamental interactive element that allows users to perform actions or navigate through the interface.

## Design Principles

### Visual Hierarchy
- Primary buttons should be the most prominent action on a page
- Secondary buttons provide alternative actions
- Use appropriate sizing to match the importance of the action

### Accessibility
- Ensure sufficient color contrast ratios
- Provide clear visual feedback for different states
- Support keyboard navigation

## States

#### Default State
- Clear, readable text
- Appropriate padding and spacing
- Consistent with design system colors

#### Hover State
- Subtle visual feedback
- Maintains accessibility standards
- Smooth transitions

#### Active/Pressed State
- Clear indication of interaction
- Consistent with platform conventions

#### Disabled State
- Visually distinct from enabled state
- Clear indication that action is not available
- Maintains layout consistency

## Usage Guidelines

### When to Use
- Primary actions (Submit, Save, Continue)
- Secondary actions (Cancel, Back, Edit)
- Navigation actions (Next, Previous)
- Destructive actions (Delete, Remove) - use with caution

### When Not to Use
- For navigation that should use links
- For actions that don't require user confirmation
- When space is extremely limited (consider icon buttons)

## Variants

### Size Variants
- **Small**: For compact interfaces or secondary actions
- **Medium**: Standard size for most use cases
- **Large**: For primary actions or when emphasis is needed

### Color Variants
- **Primary**: Main call-to-action buttons
- **Secondary**: Alternative actions or less important actions

### Signal Variants
- **Success**: For positive actions (Save, Confirm)
- **Warning**: For potentially destructive actions
- **Error**: For critical actions that need attention
- **Neutral**: Default state

## Best Practices

1. **Consistency**: Use the same button style for similar actions
2. **Clarity**: Use clear, action-oriented text
3. **Hierarchy**: Establish clear visual hierarchy with button styles
4. **Accessibility**: Ensure all buttons are keyboard accessible
5. **Feedback**: Provide clear visual feedback for all states
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const DesignOverview: Story = {
  args: {
    children: "Design Overview",
    onClick: () => console.log("Design overview clicked"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic button design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button size="small" onClick={() => console.log("Small clicked")}>
        Small
      </Button>
      <Button size="medium" onClick={() => console.log("Medium clicked")}>
        Medium
      </Button>
      <Button size="large" onClick={() => console.log("Large clicked")}>
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different size variants for different use cases and visual hierarchy.",
      },
    },
  },
  tags: ["!dev"],
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button color="primary" onClick={() => console.log("Primary clicked")}>
        Primary
      </Button>
      <Button
        color="secondary"
        onClick={() => console.log("Secondary clicked")}
      >
        Secondary
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Primary and secondary color variants for different action importance.",
      },
    },
  },
  tags: ["!dev"],
};

export const SignalVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button signal="success" onClick={() => console.log("Success clicked")}>
        Success
      </Button>
      <Button signal="warning" onClick={() => console.log("Warning clicked")}>
        Warning
      </Button>
      <Button signal="error" onClick={() => console.log("Error clicked")}>
        Error
      </Button>
      <Button signal="neutral" onClick={() => console.log("Neutral clicked")}>
        Neutral
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Signal variants for different types of actions and feedback.",
      },
    },
  },
  tags: ["!dev"],
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button
        startIcon={<AiOutlinePlus />}
        onClick={() => console.log("Add item clicked")}
      >
        Add Item
      </Button>
      <Button
        endIcon={<AiOutlineHeart />}
        onClick={() => console.log("Like clicked")}
      >
        Like
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons to enhance clarity and visual appeal.",
      },
    },
  },
  tags: ["!dev"],
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Button onClick={() => console.log("Default clicked")}>Default</Button>
      <Button disabled onClick={() => console.log("Disabled clicked")}>
        Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different button states and their visual representation.",
      },
    },
  },
  tags: ["!dev"],
};
