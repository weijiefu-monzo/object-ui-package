import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from "react";
import { Modal } from "./index";
import { Button } from "../Button";
import { Group } from "../Group";
const meta = {
    title: "Components/Modal/Design",
    component: Modal,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
## Overview
The Modal component is a dialog that appears on top of the main content, requiring user interaction before continuing.

## Design Principles

### Focus Management
- Traps focus within the modal
- Clear visual hierarchy
- Prevents interaction with background content

### Accessibility
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility

### Visual Hierarchy
- Clear distinction from background
- Prominent but not overwhelming
- Consistent with design system

## States

#### Closed State
- Not visible to user
- Background content is fully interactive
- No focus management needed

#### Open State
- Visible and focused
- Background is dimmed/blocked
- Focus trapped within modal

#### Loading State
- Shows loading indicators
- Prevents premature dismissal
- Clear feedback to user

## Usage Guidelines

### When to Use
- Confirmation dialogs
- Forms that need focus
- Important information display
- Critical user decisions
- Data input that requires attention

### When Not to Use
- For simple notifications (use toast/alert)
- For navigation (use pages/routes)
- For frequently accessed content
- When the information could be shown inline

## Variants

### Content Types
- **Simple**: Basic text and actions
- **Form**: Input fields and validation
- **Confirmation**: Yes/no decisions
- **Information**: Display-only content

### Sizes
- **Small**: For simple confirmations
- **Medium**: Standard size for most use cases
- **Large**: For complex forms or content
- **Full Screen**: For mobile or complex workflows

## Best Practices

1. **Clear Purpose**: Make the modal's purpose immediately clear
2. **Escape Routes**: Always provide clear ways to close
3. **Focus Management**: Ensure proper focus handling
4. **Responsive**: Work well on all screen sizes
5. **Loading States**: Handle loading and error states
6. **Accessibility**: Follow WCAG guidelines
        `,
            },
        },
    },
    tags: ["autodocs"],
};
export default meta;
export const DesignOverview = {
    args: {
        title: "Design Overview",
        isOpen: true,
        onClose: () => console.log("Modal closed"),
    },
    render: (args) => (_jsx(Modal, { ...args, children: _jsx("p", { children: "This demonstrates the basic modal design principles and usage guidelines." }), actions: _jsxs(Group, { fullWidth: true, children: [_jsx(Button, { fullWidth: true, onClick: () => console.log("Cancel clicked"), children: "Cancel" }), _jsx(Button, { fullWidth: true, color: "primary", onClick: () => console.log("Confirm clicked"), children: "Confirm" })] }) })),
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic modal design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const ContentTypes = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        const [modalType, setModalType] = React.useState("simple");
        const getModalContent = () => {
            switch (modalType) {
                case "simple":
                    return {
                        title: "Simple Confirmation",
                        children: _jsx("p", { children: "Are you sure you want to proceed with this action?" }),
                        actions: (_jsxs(Group, { fullWidth: true, children: [_jsx(Button, { fullWidth: true, onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { fullWidth: true, color: "primary", onClick: () => setOpen(false), children: "Confirm" })] })),
                    };
                case "form":
                    return {
                        title: "User Information",
                        children: (_jsxs("div", { style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                            }, children: [_jsx("input", { placeholder: "Name", style: { padding: "8px", border: "1px solid #ccc" } }), _jsx("input", { placeholder: "Email", style: { padding: "8px", border: "1px solid #ccc" } }), _jsx("textarea", { placeholder: "Message", rows: 3, style: { padding: "8px", border: "1px solid #ccc" } })] })),
                        actions: (_jsxs(Group, { fullWidth: true, children: [_jsx(Button, { fullWidth: true, onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { fullWidth: true, color: "primary", onClick: () => setOpen(false), children: "Save" })] })),
                    };
                case "information":
                    return {
                        title: "Important Information",
                        children: (_jsxs("div", { children: [_jsx("p", { children: "This is important information that the user needs to see." }), _jsxs("ul", { children: [_jsx("li", { children: "Key point 1" }), _jsx("li", { children: "Key point 2" }), _jsx("li", { children: "Key point 3" })] })] })),
                        actions: (_jsx(Group, { fullWidth: true, children: _jsx(Button, { fullWidth: true, color: "primary", onClick: () => setOpen(false), children: "Got it" }) })),
                    };
                default:
                    return null;
            }
        };
        const content = getModalContent();
        return (_jsxs("div", { style: { padding: "24px" }, children: [_jsxs("div", { style: { display: "flex", gap: "16px", marginBottom: "24px" }, children: [_jsx(Button, { onClick: () => {
                                setModalType("simple");
                                setOpen(true);
                            }, children: "Simple Modal" }), _jsx(Button, { onClick: () => {
                                setModalType("form");
                                setOpen(true);
                            }, children: "Form Modal" }), _jsx(Button, { onClick: () => {
                                setModalType("information");
                                setOpen(true);
                            }, children: "Information Modal" })] }), content && (_jsx(Modal, { title: content.title, isOpen: open, onClose: () => setOpen(false), children: content.children, actions: content.actions }))] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different content types showing various modal use cases.",
            },
        },
    },
    tags: ["!dev"],
};
export const InteractionPatterns = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs("div", { style: { padding: "24px" }, children: [_jsx(Button, { color: "primary", onClick: () => setOpen(true), children: "Open Modal" }), _jsx(Modal, { title: "Interactive Modal", isOpen: open, onClose: () => setOpen(false), children: _jsxs("div", { children: [_jsx("p", { children: "This modal demonstrates proper interaction patterns:" }), _jsxs("ul", { children: [_jsx("li", { children: "Click outside to close (if enabled)" }), _jsx("li", { children: "Escape key to close" }), _jsx("li", { children: "Focus management" }), _jsx("li", { children: "Clear action buttons" })] })] }), actions: _jsxs(Group, { fullWidth: true, children: [_jsx(Button, { fullWidth: true, onClick: () => setOpen(false), children: "Cancel" }), _jsx(Button, { fullWidth: true, color: "primary", onClick: () => setOpen(false), children: "Confirm" })] }) })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Interactive patterns showing proper modal behavior.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs("div", { style: { padding: "24px" }, children: [_jsx(Button, { color: "primary", onClick: () => setOpen(true), children: "Show Modal" }), _jsx(Modal, { title: "Modal States", isOpen: open, onClose: () => setOpen(false), children: _jsxs("div", { children: [_jsx("p", { children: "This modal shows the different states:" }), _jsxs("ul", { children: [_jsx("li", { children: "Open state with focus management" }), _jsx("li", { children: "Background dimming" }), _jsx("li", { children: "Proper z-index layering" }), _jsx("li", { children: "Keyboard navigation support" })] })] }), actions: _jsx(Group, { fullWidth: true, children: _jsx(Button, { fullWidth: true, onClick: () => setOpen(false), children: "Close" }) }) })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different modal states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
