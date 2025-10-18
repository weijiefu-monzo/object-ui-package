import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Modal, ModalProps } from "./index";
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
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

export const DesignOverview: Story = {
  args: {
    title: "Design Overview",
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  render: (args) => (
    <Modal
      {...args}
      children={
        <p>
          This demonstrates the basic modal design principles and usage
          guidelines.
        </p>
      }
      actions={
        <Group fullWidth>
          <Button fullWidth onClick={() => console.log("Cancel clicked")}>
            Cancel
          </Button>
          <Button
            fullWidth
            color="primary"
            onClick={() => console.log("Confirm clicked")}
          >
            Confirm
          </Button>
        </Group>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic modal design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const ContentTypes: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState("simple");

    const getModalContent = () => {
      switch (modalType) {
        case "simple":
          return {
            title: "Simple Confirmation",
            children: <p>Are you sure you want to proceed with this action?</p>,
            actions: (
              <Group fullWidth>
                <Button fullWidth onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Confirm
                </Button>
              </Group>
            ),
          };
        case "form":
          return {
            title: "User Information",
            children: (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <input
                  placeholder="Name"
                  style={{ padding: "8px", border: "1px solid #ccc" }}
                />
                <input
                  placeholder="Email"
                  style={{ padding: "8px", border: "1px solid #ccc" }}
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  style={{ padding: "8px", border: "1px solid #ccc" }}
                />
              </div>
            ),
            actions: (
              <Group fullWidth>
                <Button fullWidth onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Save
                </Button>
              </Group>
            ),
          };
        case "information":
          return {
            title: "Important Information",
            children: (
              <div>
                <p>This is important information that the user needs to see.</p>
                <ul>
                  <li>Key point 1</li>
                  <li>Key point 2</li>
                  <li>Key point 3</li>
                </ul>
              </div>
            ),
            actions: (
              <Group fullWidth>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Got it
                </Button>
              </Group>
            ),
          };
        default:
          return null;
      }
    };

    const content = getModalContent();

    return (
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <Button
            onClick={() => {
              setModalType("simple");
              setOpen(true);
            }}
          >
            Simple Modal
          </Button>
          <Button
            onClick={() => {
              setModalType("form");
              setOpen(true);
            }}
          >
            Form Modal
          </Button>
          <Button
            onClick={() => {
              setModalType("information");
              setOpen(true);
            }}
          >
            Information Modal
          </Button>
        </div>

        {content && (
          <Modal
            title={content.title}
            isOpen={open}
            onClose={() => setOpen(false)}
            children={content.children}
            actions={content.actions}
          />
        )}
      </div>
    );
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

export const InteractionPatterns: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ padding: "24px" }}>
        <Button color="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Modal
          title="Interactive Modal"
          isOpen={open}
          onClose={() => setOpen(false)}
          children={
            <div>
              <p>This modal demonstrates proper interaction patterns:</p>
              <ul>
                <li>Click outside to close (if enabled)</li>
                <li>Escape key to close</li>
                <li>Focus management</li>
                <li>Clear action buttons</li>
              </ul>
            </div>
          }
          actions={
            <Group fullWidth>
              <Button fullWidth onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button fullWidth color="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </Group>
          }
        />
      </div>
    );
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

export const States: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ padding: "24px" }}>
        <Button color="primary" onClick={() => setOpen(true)}>
          Show Modal
        </Button>

        <Modal
          title="Modal States"
          isOpen={open}
          onClose={() => setOpen(false)}
          children={
            <div>
              <p>This modal shows the different states:</p>
              <ul>
                <li>Open state with focus management</li>
                <li>Background dimming</li>
                <li>Proper z-index layering</li>
                <li>Keyboard navigation support</li>
              </ul>
            </div>
          }
          actions={
            <Group fullWidth>
              <Button fullWidth onClick={() => setOpen(false)}>
                Close
              </Button>
            </Group>
          }
        />
      </div>
    );
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
