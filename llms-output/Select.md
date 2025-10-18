# Select Component

## Design Guidelines

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

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string | No | - |
| label | string | No | - |
| placeholder | string | No | - |
| options | SelectOption[] | Yes | - |
| value | string | No | - |
| onChange | GenericEventHandler<HTMLSelectElement> | undefined | No | - |

## Examples

### Default

```tsx
<Select
  label="Fruit"
  placeholder="Choose a fruit"
  options="sampleOptions"
/>
```

