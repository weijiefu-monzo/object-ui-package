# Modal Component

## Design Guidelines

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

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| children | ComponentChildren | Yes | - |
| isOpen | boolean | Yes | - |
| onClose | () => void | Yes | - |
| title | string | Yes | - |
| actions | ComponentChildren | Yes | - |

## Examples

### Default

```tsx
<Modal
  title="Default Modal"
/>
```

