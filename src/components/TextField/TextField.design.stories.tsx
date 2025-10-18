import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { TextField, TextFieldProps } from "./index";

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
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<TextFieldProps>;

export const DesignOverview: Story = {
  args: {
    label: "Design Overview",
    placeholder: "Enter some text",
  },
  render: (args) => {
    const [value, setValue] = React.useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          {...args}
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        />
        <div>Current value: {value || "(empty)"}</div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic text field design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const InputTypes: Story = {
  render: () => {
    const [values, setValues] = React.useState({
      text: "",
      email: "",
      password: "",
      number: "",
    });

    const handleChange =
      (field: keyof typeof values) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }));
      };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minWidth: "300px",
        }}
      >
        <TextField
          label="Text Input"
          placeholder="Enter text"
          value={values.text}
          onChange={handleChange("text")}
        />

        <TextField
          label="Email Input"
          type="email"
          placeholder="Enter email address"
          value={values.email}
          onChange={handleChange("email")}
        />

        <TextField
          label="Password Input"
          type="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange("password")}
        />

        <TextField
          label="Number Input"
          type="number"
          placeholder="Enter number"
          value={values.number}
          onChange={handleChange("number")}
        />
      </div>
    );
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

export const States: Story = {
  render: () => {
    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("Filled text");
    const [value3, setValue3] = React.useState("");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h4>Default State</h4>
          <TextField
            label="Default"
            placeholder="Enter text"
            value={value1}
            onChange={(e) => setValue1((e.target as HTMLInputElement).value)}
          />
        </div>

        <div>
          <h4>Filled State</h4>
          <TextField
            label="Filled"
            placeholder="Enter text"
            value={value2}
            onChange={(e) => setValue2((e.target as HTMLInputElement).value)}
          />
        </div>

        <div>
          <h4>Error State</h4>
          <TextField
            label="Error"
            placeholder="Enter text"
            value={value3}
            onChange={(e) => setValue3((e.target as HTMLInputElement).value)}
            error="This field is required"
          />
        </div>

        <div>
          <h4>Disabled State</h4>
          <TextField
            label="Disabled"
            placeholder="This is disabled"
            value="Disabled text"
            onChange={() => {}}
            disabled
          />
        </div>
      </div>
    );
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

export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (
        !formData.email &&
        !newErrors.email &&
        !/\S+@\S+\.\S+/.test(formData.email)
      ) {
        newErrors.email = "Email is invalid";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Form submitted:", formData);
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "400px",
        }}
      >
        <h4>Contact Information</h4>

        <TextField
          label="First Name"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({
              ...formData,
              firstName: (e.target as HTMLInputElement).value,
            })
          }
          error={errors.firstName}
        />

        <TextField
          label="Last Name"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({
              ...formData,
              lastName: (e.target as HTMLInputElement).value,
            })
          }
          error={errors.lastName}
        />

        <TextField
          label="Email"
          type="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: (e.target as HTMLInputElement).value,
            })
          }
          error={errors.email}
        />

        <TextField
          label="Phone"
          type="tel"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: (e.target as HTMLInputElement).value,
            })
          }
        />

        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Submit
        </button>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing text field integration in a form context with validation.",
      },
    },
  },
  tags: ["!dev"],
};
