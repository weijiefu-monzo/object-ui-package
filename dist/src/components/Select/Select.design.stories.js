import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from "react";
import { Select } from "./index";
const meta = {
    title: "Components/Select/Design",
    component: Select,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
## Overview
The Select component allows users to choose one option from a dropdown list of predefined choices.

## Design Principles

### Usability
- Clear visual indication of current selection
- Easy to scan and select options
- Consistent with form design patterns

### Accessibility
- Keyboard navigation support
- Screen reader compatibility
- Proper focus management

### Visual Clarity
- Clear dropdown indicator
- Consistent styling with other form elements
- Proper spacing and typography

## States

#### Default State
- Shows placeholder or current selection
- Clear dropdown indicator
- Ready for interaction

#### Open State
- Dropdown list is visible
- Current selection is highlighted
- Options are clearly presented

#### Focus State
- Clear focus indicator
- Keyboard navigation ready
- Consistent with other form elements

#### Disabled State
- Visually distinct from enabled state
- Clear indication of unavailability
- Maintains layout consistency

## Usage Guidelines

### When to Use
- Single selection from multiple options
- Form inputs with predefined choices
- Filtering and sorting options
- Configuration settings

### When Not to Use
- For multiple selections (use checkboxes)
- When only 2-3 options (use radio buttons)
- For free text input (use text field)
- When options are not mutually exclusive

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
2. **Logical Ordering**: Sort options logically (alphabetically, by frequency, etc.)
3. **Consistent Styling**: Match other form elements
4. **Accessibility**: Ensure keyboard navigation and screen reader support
5. **Loading States**: Handle loading and error states
6. **Validation**: Provide clear validation feedback
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
        placeholder: "Choose an option",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
        ],
    },
    render: (args) => {
        const [value, setValue] = React.useState("");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsx(Select, { ...args, value: value, onChange: (e) => setValue(e.target.value) }), _jsxs("div", { children: ["Current value: ", value || "(none)"] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic select design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const OptionTypes = {
    render: () => {
        const [value1, setValue1] = React.useState("");
        const [value2, setValue2] = React.useState("");
        const [value3, setValue3] = React.useState("");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h4", { children: "Simple Options" }), _jsx(Select, { label: "Fruit", placeholder: "Choose a fruit", value: value1, onChange: (e) => setValue1(e.target.value), options: [
                                { label: "Apple", value: "apple" },
                                { label: "Banana", value: "banana" },
                                { label: "Cherry", value: "cherry" },
                            ] })] }), _jsxs("div", { children: [_jsx("h4", { children: "Many Options" }), _jsx(Select, { label: "Country", placeholder: "Select your country", value: value2, onChange: (e) => setValue2(e.target.value), options: [
                                { label: "United States", value: "us" },
                                { label: "Canada", value: "ca" },
                                { label: "United Kingdom", value: "uk" },
                                { label: "Germany", value: "de" },
                                { label: "France", value: "fr" },
                                { label: "Japan", value: "jp" },
                                { label: "Australia", value: "au" },
                            ] })] }), _jsxs("div", { children: [_jsx("h4", { children: "Grouped Options" }), _jsx(Select, { label: "Department", placeholder: "Choose your department", value: value3, onChange: (e) => setValue3(e.target.value), options: [
                                { label: "Engineering", value: "eng" },
                                { label: "Design", value: "design" },
                                { label: "Marketing", value: "marketing" },
                                { label: "Sales", value: "sales" },
                                { label: "Support", value: "support" },
                            ] })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different option types showing various use cases.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => {
        const [value1, setValue1] = React.useState("");
        const [value2, setValue2] = React.useState("selected");
        const [value3, setValue3] = React.useState("");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h4", { children: "Default State" }), _jsx(Select, { label: "Default", placeholder: "Choose an option", value: value1, onChange: (e) => setValue1(e.target.value), options: [
                                { label: "Option 1", value: "option1" },
                                { label: "Option 2", value: "option2" },
                            ] })] }), _jsxs("div", { children: [_jsx("h4", { children: "Selected State" }), _jsx(Select, { label: "Selected", placeholder: "Choose an option", value: value2, onChange: (e) => setValue2(e.target.value), options: [
                                { label: "Option 1", value: "option1" },
                                { label: "Selected Option", value: "selected" },
                                { label: "Option 3", value: "option3" },
                            ] })] }), _jsxs("div", { children: [_jsx("h4", { children: "Disabled State" }), _jsx(Select, { label: "Disabled", placeholder: "This is disabled", value: value3, onChange: (e) => setValue3(e.target.value), options: [
                                { label: "Option 1", value: "option1" },
                                { label: "Option 2", value: "option2" },
                            ], disabled: true })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different select states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
export const FormIntegration = {
    render: () => {
        const [formData, setFormData] = React.useState({
            name: "",
            country: "",
            department: "",
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
            }, children: [_jsx("h4", { children: "User Information Form" }), _jsxs("div", { children: [_jsx("label", { style: { display: "block", marginBottom: "4px" }, children: "Name" }), _jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({
                                ...formData,
                                name: e.target.value,
                            }), style: { width: "100%", padding: "8px", border: "1px solid #ccc" } })] }), _jsx(Select, { label: "Country", placeholder: "Select your country", value: formData.country, onChange: (e) => setFormData({
                        ...formData,
                        country: e.target.value,
                    }), options: [
                        { label: "United States", value: "us" },
                        { label: "Canada", value: "ca" },
                        { label: "United Kingdom", value: "uk" },
                    ] }), _jsx(Select, { label: "Department", placeholder: "Choose your department", value: formData.department, onChange: (e) => setFormData({
                        ...formData,
                        department: e.target.value,
                    }), options: [
                        { label: "Engineering", value: "eng" },
                        { label: "Design", value: "design" },
                        { label: "Marketing", value: "marketing" },
                    ] }), _jsx("button", { type: "submit", style: {
                        padding: "8px 16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                    }, children: "Submit" })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Example showing select integration in a form context.",
            },
        },
    },
    tags: ["!dev"],
};
