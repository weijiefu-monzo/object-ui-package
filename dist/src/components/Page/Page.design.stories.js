import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Page } from "./index";
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
};
export default meta;
export const DesignOverview = {
    args: {},
    render: (args) => (_jsx(Page, { ...args, children: _jsxs("div", { style: { padding: "24px" }, children: [_jsx("h1", { children: "Design Overview" }), _jsx("p", { children: "This demonstrates the basic page design principles and usage guidelines." }), _jsxs(Group, { children: [_jsx(Button, { onClick: () => console.log("Action 1 clicked"), children: "Action 1" }), _jsx(Button, { onClick: () => console.log("Action 2 clicked"), children: "Action 2" })] })] }) })),
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the basic page design principles and usage guidelines.",
            },
        },
    },
    tags: ["!dev"],
};
export const LayoutPatterns = {
    render: () => (_jsx(Page, { children: _jsxs("div", { style: { padding: "24px" }, children: [_jsx("h1", { children: "Layout Patterns" }), _jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h2", { children: "Single Column Layout" }), _jsxs("div", { style: {
                                border: "1px solid #ccc",
                                padding: "16px",
                                borderRadius: "4px",
                            }, children: [_jsx("p", { children: "This is a single column layout with consistent spacing and clear hierarchy." }), _jsxs(Group, { children: [_jsx(Button, { onClick: () => console.log("Primary clicked"), children: "Primary Action" }), _jsx(Button, { onClick: () => console.log("Secondary clicked"), children: "Secondary Action" })] })] })] }), _jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h2", { children: "Multi Column Layout" }), _jsxs("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 2fr",
                                gap: "16px",
                            }, children: [_jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Sidebar" }), _jsx("p", { children: "Navigation and secondary content" })] }), _jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Main Content" }), _jsx("p", { children: "Primary content area with more space" })] })] })] }), _jsxs("div", { children: [_jsx("h2", { children: "Grid Layout" }), _jsxs("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "16px",
                            }, children: [_jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Card 1" }), _jsx("p", { children: "Content card" })] }), _jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Card 2" }), _jsx("p", { children: "Content card" })] }), _jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Card 3" }), _jsx("p", { children: "Content card" })] })] })] })] }) })),
    parameters: {
        docs: {
            description: {
                story: "Different layout patterns showing various page structures.",
            },
        },
    },
    tags: ["!dev"],
};
export const ContentTypes = {
    render: () => (_jsx(Page, { children: _jsxs("div", { style: { padding: "24px" }, children: [_jsx("h1", { children: "Content Types" }), _jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h2", { children: "Dashboard Layout" }), _jsxs("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "16px",
                            }, children: [_jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Widget 1" }), _jsx("p", { children: "Dashboard widget content" })] }), _jsxs("div", { style: {
                                        border: "1px solid #ccc",
                                        padding: "16px",
                                        borderRadius: "4px",
                                    }, children: [_jsx("h3", { children: "Widget 2" }), _jsx("p", { children: "Dashboard widget content" })] })] })] }), _jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h2", { children: "Form Layout" }), _jsxs("div", { style: { maxWidth: "400px" }, children: [_jsxs("div", { style: { marginBottom: "16px" }, children: [_jsx("label", { style: { display: "block", marginBottom: "4px" }, children: "Name" }), _jsx("input", { style: {
                                                width: "100%",
                                                padding: "8px",
                                                border: "1px solid #ccc",
                                            } })] }), _jsxs("div", { style: { marginBottom: "16px" }, children: [_jsx("label", { style: { display: "block", marginBottom: "4px" }, children: "Email" }), _jsx("input", { style: {
                                                width: "100%",
                                                padding: "8px",
                                                border: "1px solid #ccc",
                                            } })] }), _jsxs(Group, { children: [_jsx(Button, { onClick: () => console.log("Save clicked"), children: "Save" }), _jsx(Button, { onClick: () => console.log("Cancel clicked"), children: "Cancel" })] })] })] }), _jsxs("div", { children: [_jsx("h2", { children: "Content Layout" }), _jsxs("div", { style: { maxWidth: "600px" }, children: [_jsx("h3", { children: "Article Title" }), _jsx("p", { children: "This is a content layout with proper typography and spacing. It demonstrates how to structure content for readability and engagement." }), _jsx("p", { children: "Multiple paragraphs and sections can be organized within the page component to create a cohesive reading experience." })] })] })] }) })),
    parameters: {
        docs: {
            description: {
                story: "Different content types showing various page use cases.",
            },
        },
    },
    tags: ["!dev"],
};
export const States = {
    render: () => (_jsx(Page, { children: _jsxs("div", { style: { padding: "24px" }, children: [_jsx("h1", { children: "Page States" }), _jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h2", { children: "Default State" }), _jsxs("div", { style: {
                                border: "1px solid #ccc",
                                padding: "16px",
                                borderRadius: "4px",
                            }, children: [_jsx("p", { children: "This page is in its default state with normal content and interactions." }), _jsx(Group, { children: _jsx(Button, { onClick: () => console.log("Action clicked"), children: "Action" }) })] })] }), _jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h2", { children: "Loading State" }), _jsxs("div", { style: {
                                border: "1px solid #ccc",
                                padding: "16px",
                                borderRadius: "4px",
                                textAlign: "center",
                            }, children: [_jsx("p", { children: "Loading content..." }), _jsx("div", { style: {
                                        width: "20px",
                                        height: "20px",
                                        border: "2px solid #ccc",
                                        borderTop: "2px solid #333",
                                        borderRadius: "50%",
                                        animation: "spin 1s linear infinite",
                                        margin: "0 auto",
                                    } })] })] }), _jsxs("div", { children: [_jsx("h2", { children: "Error State" }), _jsxs("div", { style: {
                                border: "1px solid #ff6b6b",
                                padding: "16px",
                                borderRadius: "4px",
                                backgroundColor: "#ffe0e0",
                            }, children: [_jsx("p", { style: { color: "#d63031", margin: "0 0 16px 0" }, children: "An error occurred while loading the content." }), _jsxs(Group, { children: [_jsx(Button, { onClick: () => console.log("Retry clicked"), children: "Retry" }), _jsx(Button, { onClick: () => console.log("Go back clicked"), children: "Go Back" })] })] })] })] }) })),
    parameters: {
        docs: {
            description: {
                story: "Different page states and their visual representation.",
            },
        },
    },
    tags: ["!dev"],
};
