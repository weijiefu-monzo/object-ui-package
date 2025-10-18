# Switch Component

## Design Guidelines

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

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| checked | boolean | Yes | - |
| onChange | (checked: boolean) => void | Yes | - |

## Examples

### Default

```tsx
<Switch
  checked="false"
/>
```

### Checked

```tsx
<Switch
  checked="true"
/>
```

### Interactive

```tsx
<Switch
  checked="false"
/>
```

