import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Button } from "./index";
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
};
export default meta;
export const DesignOverview = {
    args: {
        children: "Design Overview",
        onClick: () => console.log("Design overview clicked"),
    },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic button design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const SizeVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(Button, { size: "small", onClick: () => console.log("Small clicked"), children: "Small" }), _jsx(Button, { size: "medium", onClick: () => console.log("Medium clicked"), children: "Medium" }), _jsx(Button, { size: "large", onClick: () => console.log("Large clicked"), children: "Large" })] })),
    parameters: {
        docs: {
            description: {
                story: "Different size variants for different use cases and visual hierarchy.",
            },
        },
    },
    tags: ["!dev"],
};
export const ColorVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(Button, { color: "primary", onClick: () => console.log("Primary clicked"), children: "Primary" }), _jsx(Button, { color: "secondary", onClick: () => console.log("Secondary clicked"), children: "Secondary" })] })),
    parameters: {
        docs: {
            description: {
                story: "Primary and secondary color variants for different action importance.",
            },
        },
    },
    tags: ["!dev"],
};
export const SignalVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(Button, { signal: "success", onClick: () => console.log("Success clicked"), children: "Success" }), _jsx(Button, { signal: "warning", onClick: () => console.log("Warning clicked"), children: "Warning" }), _jsx(Button, { signal: "error", onClick: () => console.log("Error clicked"), children: "Error" }), _jsx(Button, { signal: "neutral", onClick: () => console.log("Neutral clicked"), children: "Neutral" })] })),
    parameters: {
        docs: {
            description: {
                story: "Signal variants for different types of actions and feedback.",
            },
        },
    },
    tags: ["!dev"],
};
export const WithIcons = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(Button, { startIcon: _jsx(AiOutlinePlus, {}), onClick: () => console.log("Add item clicked"), children: "Add Item" }), _jsx(Button, { endIcon: _jsx(AiOutlineHeart, {}), onClick: () => console.log("Like clicked"), children: "Like" })] })),
    parameters: {
        docs: {
            description: {
                story: "Buttons with icons to enhance clarity and visual appeal.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(Button, { onClick: () => console.log("Default clicked"), children: "Default" }), _jsx(Button, { disabled: true, onClick: () => console.log("Disabled clicked"), children: "Disabled" })] })),
    parameters: {
        docs: {
            description: {
                story: "Different button states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
