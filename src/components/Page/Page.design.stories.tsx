import * as React from "react";
import type { Meta, StoryObj } from "@storybook/preact-vite";
import { Page, PageProps } from "./index";
import { Button } from "../Button";
import { Group } from "../Group";

const meta = {
  title: "Components/Page/Design",
  component: Page,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## Overview
The Page component is a full-screen container that provides the main layout structure for application pages.

## Design Principles

### Layout Structure
- Full-screen coverage
- Consistent spacing and margins
- Responsive design principles

### Content Organization
- Clear content hierarchy
- Proper spacing between sections
- Consistent padding and margins

### Accessibility
- Proper semantic structure
- Keyboard navigation support
- Screen reader compatibility

## States

#### Default State
- Full-screen layout
- Content properly contained
- Ready for user interaction

#### Loading State
- Shows loading indicators
- Maintains layout structure
- Clear feedback to user

#### Error State
- Displays error messages
- Maintains layout consistency
- Provides recovery options

## Usage Guidelines

### When to Use
- Main application pages
- Dashboard layouts
- Content display pages
- Form pages
- Settings pages

### When Not to Use
- For modal content
- For small components
- For embedded content
- When partial screen coverage is needed

## Variants

### Content Types
- **Dashboard**: Multiple sections and widgets
- **Form**: Input fields and actions
- **Content**: Text and media display
- **Settings**: Configuration options

### Layout Patterns
- **Single Column**: Linear content flow
- **Multi Column**: Sidebar and main content
- **Grid**: Card-based layouts
- **Full Width**: Edge-to-edge content

## Best Practices

1. **Consistency**: Use consistent spacing and layout patterns
2. **Responsiveness**: Ensure proper behavior on all screen sizes
3. **Accessibility**: Follow semantic HTML and ARIA guidelines
4. **Performance**: Optimize for fast loading and rendering
5. **Navigation**: Provide clear navigation patterns
6. **Content Hierarchy**: Establish clear visual hierarchy
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const DesignOverview: Story = {
  args: {},
  render: (args) => (
    <Page {...args}>
      <div style={{ padding: "24px" }}>
        <h1>Design Overview</h1>
        <p>
          This demonstrates the basic page design principles and usage
          guidelines.
        </p>
        <Group>
          <Button onClick={() => console.log("Action 1 clicked")}>
            Action 1
          </Button>
          <Button onClick={() => console.log("Action 2 clicked")}>
            Action 2
          </Button>
        </Group>
      </div>
    </Page>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the basic page design principles and usage guidelines.",
      },
    },
  },
  tags: ["!dev"],
};

export const LayoutPatterns: Story = {
  render: () => (
    <Page>
      <div style={{ padding: "24px" }}>
        <h1>Layout Patterns</h1>

        <div style={{ marginBottom: "32px" }}>
          <h2>Single Column Layout</h2>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "4px",
            }}
          >
            <p>
              This is a single column layout with consistent spacing and clear
              hierarchy.
            </p>
            <Group>
              <Button onClick={() => console.log("Primary clicked")}>
                Primary Action
              </Button>
              <Button onClick={() => console.log("Secondary clicked")}>
                Secondary Action
              </Button>
            </Group>
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2>Multi Column Layout</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "16px",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Sidebar</h3>
              <p>Navigation and secondary content</p>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Main Content</h3>
              <p>Primary content area with more space</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Grid Layout</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Card 1</h3>
              <p>Content card</p>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Card 2</h3>
              <p>Content card</p>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Card 3</h3>
              <p>Content card</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different layout patterns showing various page structures.",
      },
    },
  },
  tags: ["!dev"],
};

export const ContentTypes: Story = {
  render: () => (
    <Page>
      <div style={{ padding: "24px" }}>
        <h1>Content Types</h1>

        <div style={{ marginBottom: "32px" }}>
          <h2>Dashboard Layout</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Widget 1</h3>
              <p>Dashboard widget content</p>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "4px",
              }}
            >
              <h3>Widget 2</h3>
              <p>Dashboard widget content</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2>Form Layout</h2>
          <div style={{ maxWidth: "400px" }}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>
                Name
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>
                Email
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <Group>
              <Button onClick={() => console.log("Save clicked")}>Save</Button>
              <Button onClick={() => console.log("Cancel clicked")}>
                Cancel
              </Button>
            </Group>
          </div>
        </div>

        <div>
          <h2>Content Layout</h2>
          <div style={{ maxWidth: "600px" }}>
            <h3>Article Title</h3>
            <p>
              This is a content layout with proper typography and spacing. It
              demonstrates how to structure content for readability and
              engagement.
            </p>
            <p>
              Multiple paragraphs and sections can be organized within the page
              component to create a cohesive reading experience.
            </p>
          </div>
        </div>
      </div>
    </Page>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different content types showing various page use cases.",
      },
    },
  },
  tags: ["!dev"],
};

export const States: Story = {
  render: () => (
    <Page>
      <div style={{ padding: "24px" }}>
        <h1>Page States</h1>

        <div style={{ marginBottom: "32px" }}>
          <h2>Default State</h2>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "4px",
            }}
          >
            <p>
              This page is in its default state with normal content and
              interactions.
            </p>
            <Group>
              <Button onClick={() => console.log("Action clicked")}>
                Action
              </Button>
            </Group>
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2>Loading State</h2>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <p>Loading content...</p>
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "2px solid #ccc",
                borderTop: "2px solid #333",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
              }}
            ></div>
          </div>
        </div>

        <div>
          <h2>Error State</h2>
          <div
            style={{
              border: "1px solid #ff6b6b",
              padding: "16px",
              borderRadius: "4px",
              backgroundColor: "#ffe0e0",
            }}
          >
            <p style={{ color: "#d63031", margin: "0 0 16px 0" }}>
              An error occurred while loading the content.
            </p>
            <Group>
              <Button onClick={() => console.log("Retry clicked")}>
                Retry
              </Button>
              <Button onClick={() => console.log("Go back clicked")}>
                Go Back
              </Button>
            </Group>
          </div>
        </div>
      </div>
    </Page>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different page states and their visual representation.",
      },
    },
  },
  tags: ["!dev"],
};
