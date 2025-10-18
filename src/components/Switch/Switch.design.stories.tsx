import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Switch, SwitchProps } from "./index";

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
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<SwitchProps>;

export const DesignOverview: Story = {
  args: {
    checked: false,
    onChange: (checked) => console.log("Switch toggled:", checked),
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic switch design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const States: Story = {
  render: () => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(true);
    const [checked3, setChecked3] = React.useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Switch
            checked={checked1}
            onChange={(checked) => setChecked1(checked)}
          />
          <label>Off State</label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Switch
            checked={checked2}
            onChange={(checked) => setChecked2(checked)}
          />
          <label>On State</label>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Switch
            checked={checked3}
            onChange={(checked) => setChecked3(checked)}
            disabled
          />
          <label>Disabled State</label>
        </div>
      </div>
    );
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

export const InteractiveExample: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState({
      email: true,
      push: false,
      sms: true,
    });

    const handleToggle = (key: keyof typeof notifications) => {
      setNotifications((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
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
        <h4>Notification Settings</h4>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Email Notifications</label>
          <Switch
            checked={notifications.email}
            onChange={() => handleToggle("email")}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Push Notifications</label>
          <Switch
            checked={notifications.push}
            onChange={() => handleToggle("push")}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>SMS Notifications</label>
          <Switch
            checked={notifications.sms}
            onChange={() => handleToggle("sms")}
          />
        </div>

        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#f5f5f5",
            borderRadius: "4px",
          }}
        >
          <strong>Current Settings:</strong>
          <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
            <li>Email: {notifications.email ? "On" : "Off"}</li>
            <li>Push: {notifications.push ? "On" : "Off"}</li>
            <li>SMS: {notifications.sms ? "On" : "Off"}</li>
          </ul>
        </div>
      </div>
    );
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

export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: "",
      newsletter: false,
      marketing: true,
      analytics: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
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
        <h4>User Preferences</h4>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: (e.target as HTMLInputElement).value,
              })
            }
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Subscribe to Newsletter</label>
          <Switch
            checked={formData.newsletter}
            onChange={(checked) =>
              setFormData({ ...formData, newsletter: checked })
            }
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Marketing Communications</label>
          <Switch
            checked={formData.marketing}
            onChange={(checked) =>
              setFormData({ ...formData, marketing: checked })
            }
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Analytics Tracking</label>
          <Switch
            checked={formData.analytics}
            onChange={(checked) =>
              setFormData({ ...formData, analytics: checked })
            }
          />
        </div>

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
          Save Preferences
        </button>
      </form>
    );
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
