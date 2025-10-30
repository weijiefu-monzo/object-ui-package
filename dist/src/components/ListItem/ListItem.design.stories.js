import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { ListItem } from "./index";
import { IconButton } from "../IconButton";
import { AiOutlineUser, AiOutlineHeart, AiOutlineMore, AiOutlineDelete, } from "react-icons/ai";
const meta = {
    title: "Components/ListItem/Design",
    component: ListItem,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
## Overview
The ListItem component is a flexible container for displaying structured information in lists, with support for avatars, actions, and various layouts.

## Design Principles

### Information Hierarchy
- Clear primary and secondary information
- Consistent spacing and alignment
- Visual hierarchy through typography and spacing

### Interactive Elements
- Clear indication of clickable areas
- Proper focus management
- Accessible interaction patterns

### Flexibility
- Support for various content types
- Adaptable to different use cases
- Consistent visual treatment

## States

#### Default State
- Clear visual structure
- Ready for interaction
- Consistent spacing and alignment

#### Hover State
- Subtle visual feedback
- Clear indication of interactivity
- Smooth transitions

#### Active/Pressed State
- Clear indication of interaction
- Consistent with platform conventions

#### Disabled State
- Visually distinct from enabled state
- Clear indication of unavailability
- Maintains layout consistency

## Usage Guidelines

### When to Use
- User lists (contacts, team members)
- Content lists (articles, products)
- Navigation items
- Settings or configuration items
- Any structured data display

### When Not to Use
- For simple text display
- When complex layouts are needed
- For single-line content without structure

## Variants

### Content Variants
- **Basic**: Label and description only
- **With Avatar**: Includes avatar/icon
- **With Action**: Includes action buttons
- **Complex**: Multiple elements combined

### Layout Variants
- **Outlined**: With border outline
- **Clickable**: Entire item is interactive
- **Static**: Display only, no interaction

## Best Practices

1. **Consistency**: Use consistent spacing and alignment
2. **Accessibility**: Ensure proper focus management and ARIA labels
3. **Visual Hierarchy**: Use typography to establish information priority
4. **Actions**: Place actions logically and consistently
5. **Responsiveness**: Ensure items work well on different screen sizes
6. **Loading States**: Consider loading and empty states
        `,
            },
        },
    },
    tags: ["autodocs"],
};
export default meta;
export const DesignOverview = {
    args: {
        label: "Design Overview",
        description: "This demonstrates the basic list item design principles",
    },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic list item design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const ContentVariants = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "300px",
        }, children: [_jsx(ListItem, { label: "Basic Item", description: "This is a basic list item with just text" }), _jsx(ListItem, { label: "With Avatar", description: "This item includes an avatar", avatar: _jsx(AiOutlineUser, { size: 20 }) }), _jsx(ListItem, { label: "With Action", description: "This item has an action button", action: _jsx(IconButton, { size: "small", onClick: () => console.log("Action clicked"), children: _jsx(AiOutlineHeart, {}) }) }), _jsx(ListItem, { label: "Complex Item", description: "This item has both avatar and action", avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: () => console.log("More clicked"), children: _jsx(AiOutlineMore, {}) }) })] })),
    parameters: {
        docs: {
            description: {
                story: "Different content variants showing various combinations of elements.",
            },
        },
    },
    tags: ["!dev"],
};
export const LayoutVariants = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "300px",
        }, children: [_jsx(ListItem, { label: "Default Item", description: "Standard list item appearance", avatar: _jsx(AiOutlineUser, { size: 20 }) }), _jsx(ListItem, { label: "Outlined Item", description: "This item has an outline border", outlined: true, avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: () => console.log("Delete clicked"), children: _jsx(AiOutlineDelete, {}) }) }), _jsx(ListItem, { label: "Clickable Item", description: "This entire item is clickable", onClick: () => console.log("Item clicked"), avatar: _jsx(AiOutlineUser, { size: 20 }) })] })),
    parameters: {
        docs: {
            description: {
                story: "Different layout variants showing outlined and clickable states.",
            },
        },
    },
    tags: ["!dev"],
};
export const UserListExample = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "350px",
        }, children: [_jsx("h4", { children: "Team Members" }), _jsx(ListItem, { label: "John Doe", description: "Software Engineer", avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: () => console.log("More clicked"), children: _jsx(AiOutlineMore, {}) }) }), _jsx(ListItem, { label: "Jane Smith", description: "Product Manager", avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: () => console.log("More clicked"), children: _jsx(AiOutlineMore, {}) }) }), _jsx(ListItem, { label: "Mike Johnson", description: "Designer", avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: () => console.log("More clicked"), children: _jsx(AiOutlineMore, {}) }) })] })),
    parameters: {
        docs: {
            description: {
                story: "Real-world example showing a user list with consistent styling.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "300px",
        }, children: [_jsx(ListItem, { label: "Normal State", description: "This item is in its normal state", avatar: _jsx(AiOutlineUser, { size: 20 }) }), _jsx(ListItem, { label: "With Action", description: "This item has an action button", avatar: _jsx(AiOutlineUser, { size: 20 }), action: _jsx(IconButton, { size: "small", onClick: () => console.log("Action clicked"), children: _jsx(AiOutlineHeart, {}) }) })] })),
    parameters: {
        docs: {
            description: {
                story: "Different list item states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
