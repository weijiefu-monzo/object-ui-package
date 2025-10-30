import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { IconButton } from "./index";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineClose, AiOutlineUser, } from "react-icons/ai";
const meta = {
    title: "Components/IconButton/Design",
    component: IconButton,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
## Overview
The IconButton component is a compact button that displays only an icon, perfect for actions that need minimal space or are self-explanatory.

## Design Principles

### Visual Clarity
- Clear, recognizable icons
- Consistent sizing and spacing
- Appropriate visual feedback for interactions

### Space Efficiency
- Minimal footprint compared to text buttons
- Ideal for toolbars and compact interfaces
- Maintains accessibility standards

### Accessibility
- Sufficient touch targets (minimum 44px)
- Clear focus indicators
- Proper ARIA labels for screen readers

## States

#### Default State
- Clear icon with appropriate color
- Consistent padding and sizing
- Ready for interaction

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
- Toolbar actions (save, edit, delete)
- Navigation controls (close, back, forward)
- Toggle actions (favorite, bookmark)
- Compact interfaces where space is limited
- Actions that are universally understood through icons

### When Not to Use
- When the action is not clear from the icon alone
- For primary actions that need emphasis
- When text labels would improve clarity
- For complex actions that need explanation

## Variants

### Size Variants
- **Small**: For compact interfaces or secondary actions
- **Medium**: Standard size for most use cases
- **Large**: For primary actions or when emphasis is needed

### Color Variants
- **Primary**: Main call-to-action buttons
- **Secondary**: Alternative actions or less important actions

### Signal Variants
- **Success**: For positive actions (save, confirm)
- **Warning**: For potentially destructive actions
- **Error**: For critical actions that need attention
- **Disabled**: For unavailable actions

## Best Practices

1. **Icon Selection**: Use universally recognized icons
2. **Consistency**: Use the same icon for the same action across the app
3. **Accessibility**: Always provide meaningful ARIA labels
4. **Touch Targets**: Ensure minimum 44px touch target size
5. **Visual Feedback**: Provide clear feedback for all states
6. **Grouping**: Group related icon buttons logically
        `,
            },
        },
    },
    tags: ["autodocs"],
};
export default meta;
export const DesignOverview = {
    args: {
        onClick: () => console.log("Design overview clicked"),
    },
    render: (args) => (_jsx(IconButton, { ...args, children: _jsx(AiOutlineHeart, {}) })),
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic icon button design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const SizeVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(IconButton, { size: "small", onClick: () => console.log("Small clicked"), children: _jsx(AiOutlinePlus, {}) }), _jsx(IconButton, { size: "medium", onClick: () => console.log("Medium clicked"), children: _jsx(AiOutlinePlus, {}) }), _jsx(IconButton, { size: "large", onClick: () => console.log("Large clicked"), children: _jsx(AiOutlinePlus, {}) })] })),
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
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(IconButton, { color: "primary", onClick: () => console.log("Primary clicked"), children: _jsx(AiOutlineHeart, {}) }), _jsx(IconButton, { color: "secondary", onClick: () => console.log("Secondary clicked"), children: _jsx(AiOutlineHeart, {}) })] })),
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
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(IconButton, { signal: "success", onClick: () => console.log("Success clicked"), children: _jsx(AiOutlinePlus, {}) }), _jsx(IconButton, { signal: "warning", onClick: () => console.log("Warning clicked"), children: _jsx(AiOutlineClose, {}) }), _jsx(IconButton, { signal: "error", onClick: () => console.log("Error clicked"), children: _jsx(AiOutlineClose, {}) }), _jsx(IconButton, { signal: "disabled", onClick: () => console.log("Disabled clicked"), children: _jsx(AiOutlineUser, {}) })] })),
    parameters: {
        docs: {
            description: {
                story: "Signal variants for different types of actions and feedback.",
            },
        },
    },
    tags: ["!dev"],
};
export const CommonIcons = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(IconButton, { onClick: () => console.log("Add clicked"), children: _jsx(AiOutlinePlus, {}) }), _jsx(IconButton, { onClick: () => console.log("Heart clicked"), children: _jsx(AiOutlineHeart, {}) }), _jsx(IconButton, { onClick: () => console.log("Close clicked"), children: _jsx(AiOutlineClose, {}) }), _jsx(IconButton, { onClick: () => console.log("User clicked"), children: _jsx(AiOutlineUser, {}) })] })),
    parameters: {
        docs: {
            description: {
                story: "Common icon examples showing typical usage patterns.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => (_jsxs("div", { style: { display: "flex", gap: "16px", alignItems: "center" }, children: [_jsx(IconButton, { onClick: () => console.log("Default clicked"), children: _jsx(AiOutlineHeart, {}) }), _jsx(IconButton, { signal: "disabled", onClick: () => console.log("Disabled clicked"), children: _jsx(AiOutlineHeart, {}) })] })),
    parameters: {
        docs: {
            description: {
                story: "Different icon button states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
