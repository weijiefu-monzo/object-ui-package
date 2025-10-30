import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from "react";
import { Switch } from "./index";
const meta = {
    title: "Components/Switch/Design",
    component: Switch,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
## Overview
The Switch component is a toggle control that allows users to turn an option on or off with a single interaction.

## Design Principles

### Visual Clarity
- Clear indication of on/off state
- Smooth animation between states
- Consistent with platform conventions

### Accessibility
- Sufficient touch target size
- Clear focus indicators
- Proper ARIA attributes for screen readers

### Usability
- Intuitive interaction pattern
- Immediate visual feedback
- Consistent behavior across platforms

## States

#### Off State
- Clear indication that option is disabled
- Consistent with design system
- Ready for interaction

#### On State
- Clear indication that option is enabled
- Visual feedback for active state
- Consistent with design system

#### Disabled State
- Visually distinct from enabled state
- Clear indication of unavailability
- Maintains layout consistency

#### Focus State
- Clear focus indicator
- Keyboard navigation ready
- Consistent with other form elements

## Usage Guidelines

### When to Use
- Binary on/off settings
- Feature toggles
- Preferences and configurations
- Simple yes/no decisions

### When Not to Use
- For multiple options (use radio buttons or select)
- For actions (use buttons)
- When the state is not immediately clear
- For complex settings that need explanation

## Variants

### Size Variants
- **Small**: For compact interfaces
- **Medium**: Standard size for most use cases
- **Large**: For emphasis or accessibility

### Style Variants
- **Default**: Standard appearance
- **Outlined**: With border outline
- **Filled**: With background fill

## Best Practices

1. **Clear Labels**: Always provide descriptive labels
2. **Consistent Styling**: Match other form elements
3. **Accessibility**: Ensure keyboard navigation and screen reader support
4. **Visual Feedback**: Provide clear state indication
5. **Touch Targets**: Ensure adequate touch target size
6. **Grouping**: Group related switches logically
        `,
            },
        },
    },
    tags: ["autodocs"],
};
export default meta;
export const DesignOverview = {
    args: {
        checked: false,
        onChange: (checked) => console.log("Switch toggled:", checked),
    },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic switch design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => {
        const [checked1, setChecked1] = React.useState(false);
        const [checked2, setChecked2] = React.useState(true);
        const [checked3, setChecked3] = React.useState(false);
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [_jsx(Switch, { checked: checked1, onChange: (checked) => setChecked1(checked) }), _jsx("label", { children: "Off State" })] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [_jsx(Switch, { checked: checked2, onChange: (checked) => setChecked2(checked) }), _jsx("label", { children: "On State" })] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [_jsx(Switch, { checked: checked3, onChange: (checked) => setChecked3(checked), disabled: true }), _jsx("label", { children: "Disabled State" })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different switch states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
export const InteractiveExample = {
    render: () => {
        const [notifications, setNotifications] = React.useState({
            email: true,
            push: false,
            sms: true,
        });
        const handleToggle = (key) => {
            setNotifications((prev) => ({
                ...prev,
                [key]: !prev[key],
            }));
        };
        return (_jsxs("div", { style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                minWidth: "300px",
            }, children: [_jsx("h4", { children: "Notification Settings" }), _jsxs("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("label", { children: "Email Notifications" }), _jsx(Switch, { checked: notifications.email, onChange: () => handleToggle("email") })] }), _jsxs("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("label", { children: "Push Notifications" }), _jsx(Switch, { checked: notifications.push, onChange: () => handleToggle("push") })] }), _jsxs("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("label", { children: "SMS Notifications" }), _jsx(Switch, { checked: notifications.sms, onChange: () => handleToggle("sms") })] }), _jsxs("div", { style: {
                        marginTop: "16px",
                        padding: "12px",
                        backgroundColor: "#f5f5f5",
                        borderRadius: "4px",
                    }, children: [_jsx("strong", { children: "Current Settings:" }), _jsxs("ul", { style: { margin: "8px 0 0 0", paddingLeft: "20px" }, children: [_jsxs("li", { children: ["Email: ", notifications.email ? "On" : "Off"] }), _jsxs("li", { children: ["Push: ", notifications.push ? "On" : "Off"] }), _jsxs("li", { children: ["SMS: ", notifications.sms ? "On" : "Off"] })] })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Interactive example showing switches in a settings context.",
            },
        },
    },
    tags: ["!dev"],
};
export const FormIntegration = {
    render: () => {
        const [formData, setFormData] = React.useState({
            name: "",
            newsletter: false,
            marketing: true,
            analytics: false,
        });
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form submitted:", formData);
        };
        return (_jsxs("form", { onSubmit: handleSubmit, style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "400px",
            }, children: [_jsx("h4", { children: "User Preferences" }), _jsxs("div", { children: [_jsx("label", { style: { display: "block", marginBottom: "4px" }, children: "Name" }), _jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({
                                ...formData,
                                name: e.target.value,
                            }), style: { width: "100%", padding: "8px", border: "1px solid #ccc" } })] }), _jsxs("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("label", { children: "Subscribe to Newsletter" }), _jsx(Switch, { checked: formData.newsletter, onChange: (checked) => setFormData({ ...formData, newsletter: checked }) })] }), _jsxs("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("label", { children: "Marketing Communications" }), _jsx(Switch, { checked: formData.marketing, onChange: (checked) => setFormData({ ...formData, marketing: checked }) })] }), _jsxs("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }, children: [_jsx("label", { children: "Analytics Tracking" }), _jsx(Switch, { checked: formData.analytics, onChange: (checked) => setFormData({ ...formData, analytics: checked }) })] }), _jsx("button", { type: "submit", style: {
                        padding: "8px 16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                    }, children: "Save Preferences" })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Example showing switch integration in a form context.",
            },
        },
    },
    tags: ["!dev"],
};
