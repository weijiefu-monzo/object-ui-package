import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Checkbox } from "./index";
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
};
export default meta;
export const DesignOverview = {
    args: { id: "design-overview", label: "Design Overview" },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic checkbox design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsx(Checkbox, { id: "unchecked", label: "Unchecked" }), _jsx(Checkbox, { id: "checked", label: "Checked", checked: true })] })),
    parameters: {
        docs: {
            description: {
                story: "Different checkbox states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
