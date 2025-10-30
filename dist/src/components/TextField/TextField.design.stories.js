import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import * as React from "react";
import { TextField } from "./index";
const meta = {
    title: "Components/TextField/Design",
    component: TextField,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
## Overview
The TextField component is an input field that allows users to enter and edit text data.

## Design Principles

### Usability
- Clear visual indication of input state
- Easy to read and edit text
- Consistent with form design patterns

### Accessibility
- Proper labeling and ARIA attributes
- Keyboard navigation support
- Screen reader compatibility

### Visual Clarity
- Clear borders and focus states
- Consistent styling with other form elements
- Proper spacing and typography

## States

#### Default State
- Clear input field with placeholder or label
- Ready for text input
- Consistent with form styling

#### Focus State
- Clear focus indicator
- Cursor positioned for input
- Keyboard navigation ready

#### Filled State
- Shows entered text clearly
- Maintains visual consistency
- Ready for editing

#### Error State
- Clear indication of validation error
- Helpful error message
- Maintains accessibility

#### Disabled State
- Visually distinct from enabled state
- Clear indication of unavailability
- Maintains layout consistency

## Usage Guidelines

### When to Use
- Single-line text input
- Form fields requiring text entry
- Search inputs
- Data entry fields

### When Not to Use
- For multiple lines (use textarea)
- For selections (use select or radio buttons)
- For actions (use buttons)
- When predefined options exist (use select)

## Variants

### Input Types
- **Text**: Standard text input
- **Email**: Email validation
- **Password**: Hidden text input
- **Number**: Numeric input
- **Search**: Search input styling

### Size Variants
- **Small**: For compact interfaces
- **Medium**: Standard size for most use cases
- **Large**: For emphasis or accessibility

## Best Practices

1. **Clear Labels**: Always provide descriptive labels
2. **Placeholder Text**: Use helpful placeholder text
3. **Validation**: Provide clear validation feedback
4. **Accessibility**: Ensure keyboard navigation and screen reader support
5. **Consistent Styling**: Match other form elements
6. **Error Handling**: Provide clear error messages
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
        placeholder: "Enter some text",
    },
    render: (args) => {
        const [value, setValue] = React.useState("");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsx(TextField, { ...args, value: value, onChange: (e) => setValue(e.target.value) }), _jsxs("div", { children: ["Current value: ", value || "(empty)"] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic text field design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const InputTypes = {
    render: () => {
        const [values, setValues] = React.useState({
            text: "",
            email: "",
            password: "",
            number: "",
        });
        const handleChange = (field) => (e) => {
            setValues((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));
        };
        return (_jsxs("div", { style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                minWidth: "300px",
            }, children: [_jsx(TextField, { label: "Text Input", placeholder: "Enter text", value: values.text, onChange: handleChange("text") }), _jsx(TextField, { label: "Email Input", type: "email", placeholder: "Enter email address", value: values.email, onChange: handleChange("email") }), _jsx(TextField, { label: "Password Input", type: "password", placeholder: "Enter password", value: values.password, onChange: handleChange("password") }), _jsx(TextField, { label: "Number Input", type: "number", placeholder: "Enter number", value: values.number, onChange: handleChange("number") })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different input types showing various text field use cases.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => {
        const [value1, setValue1] = React.useState("");
        const [value2, setValue2] = React.useState("Filled text");
        const [value3, setValue3] = React.useState("");
        return (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h4", { children: "Default State" }), _jsx(TextField, { label: "Default", placeholder: "Enter text", value: value1, onChange: (e) => setValue1(e.target.value) })] }), _jsxs("div", { children: [_jsx("h4", { children: "Filled State" }), _jsx(TextField, { label: "Filled", placeholder: "Enter text", value: value2, onChange: (e) => setValue2(e.target.value) })] }), _jsxs("div", { children: [_jsx("h4", { children: "Error State" }), _jsx(TextField, { label: "Error", placeholder: "Enter text", value: value3, onChange: (e) => setValue3(e.target.value), error: "This field is required" })] }), _jsxs("div", { children: [_jsx("h4", { children: "Disabled State" }), _jsx(TextField, { label: "Disabled", placeholder: "This is disabled", value: "Disabled text", onChange: () => { }, disabled: true })] })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "Different text field states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
export const FormIntegration = {
    render: () => {
        const [formData, setFormData] = React.useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
        const [errors, setErrors] = React.useState({});
        const validateForm = () => {
            const newErrors = {};
            if (!formData.firstName)
                newErrors.firstName = "First name is required";
            if (!formData.lastName)
                newErrors.lastName = "Last name is required";
            if (!formData.email)
                newErrors.email = "Email is required";
            if (!formData.email &&
                !newErrors.email &&
                !/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Email is invalid";
            }
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            if (validateForm()) {
                console.log("Form submitted:", formData);
            }
        };
        return (_jsxs("form", { onSubmit: handleSubmit, style: {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "400px",
            }, children: [_jsx("h4", { children: "Contact Information" }), _jsx(TextField, { label: "First Name", placeholder: "Enter first name", value: formData.firstName, onChange: (e) => setFormData({
                        ...formData,
                        firstName: e.target.value,
                    }), error: errors.firstName }), _jsx(TextField, { label: "Last Name", placeholder: "Enter last name", value: formData.lastName, onChange: (e) => setFormData({
                        ...formData,
                        lastName: e.target.value,
                    }), error: errors.lastName }), _jsx(TextField, { label: "Email", type: "email", placeholder: "Enter email address", value: formData.email, onChange: (e) => setFormData({
                        ...formData,
                        email: e.target.value,
                    }), error: errors.email }), _jsx(TextField, { label: "Phone", type: "tel", placeholder: "Enter phone number", value: formData.phone, onChange: (e) => setFormData({
                        ...formData,
                        phone: e.target.value,
                    }) }), _jsx("button", { type: "submit", style: {
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
                story: "Example showing text field integration in a form context with validation.",
            },
        },
    },
    tags: ["!dev"],
};
