import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Group } from "./index";
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
};
export default meta;
export const DesignOverview = {
    args: {},
    render: (args) => (_jsxs(Group, { ...args, children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" })] })),
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic group design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const LayoutVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h4", { children: "Default (No Wrap)" }), _jsxs(Group, { children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" }), _jsx(Button, { onClick: fn, children: "Button 4" }), _jsx(Button, { onClick: fn, children: "Button 5" })] })] }), _jsxs("div", { children: [_jsx("h4", { children: "With Wrap" }), _jsxs(Group, { wrap: true, children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" }), _jsx(Button, { onClick: fn, children: "Button 4" }), _jsx(Button, { onClick: fn, children: "Button 5" })] })] })] })),
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
export const FullWidthVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h4", { children: "Default Width" }), _jsxs(Group, { children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" })] })] }), _jsxs("div", { children: [_jsx("h4", { children: "Full Width" }), _jsxs(Group, { fullWidth: true, children: [_jsx(Button, { onClick: fn, children: "Button 1" }), _jsx(Button, { onClick: fn, children: "Button 2" }), _jsx(Button, { onClick: fn, children: "Button 3" })] })] })] })),
    parameters: {
        layout: "padded",
        docs: {
            description: {
                story: "Full width variants showing how children expand to fill available space.",
            },
        },
    },
    tags: ["!dev"],
};
export const ResponsiveExample = {
    render: () => (_jsxs("div", { style: { width: "300px", border: "1px solid #ccc", padding: "16px" }, children: [_jsx("h4", { children: "Responsive Group (300px width)" }), _jsxs(Group, { wrap: true, children: [_jsx(Button, { onClick: fn, children: "Short" }), _jsx(Button, { onClick: fn, children: "Medium Length" }), _jsx(Button, { onClick: fn, children: "Very Long Button Text" }), _jsx(Button, { onClick: fn, children: "Btn" }), _jsx(Button, { onClick: fn, children: "Another Button" })] })] })),
    parameters: {
        layout: "padded",
        docs: {
            description: {
                story: "Example showing how the group adapts to different container widths.",
            },
        },
    },
    tags: ["!dev"],
};
