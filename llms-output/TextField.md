# TextField Component

## Design Guidelines

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

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string | No | - |
| label | string | No | - |
| placeholder | string | No | - |
| value | string | No | - |
| onChange | GenericEventHandler<HTMLInputElement> | undefined | No | - |

## Examples

### Default

```tsx
<TextField
  label="Label"
/>
```

