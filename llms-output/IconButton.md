# IconButton Component

## Design Guidelines

## Overview
The IconButton component is a compact button that displays only an icon, perfect for actions that need minimal space or are self-explanatory.

## Design Principles

### Visual Clarity
- Clear, recognizable icons
- Consistent sizing and spacing
- Appropriate visual feedback for interactions

### Space Efficiency
- Minimal footprint compared to text buttons
- Ideal for toolbars and compact interfaces
- Maintains accessibility standards

### Accessibility
- Sufficient touch targets (minimum 44px)
- Clear focus indicators
- Proper ARIA labels for screen readers

## States

#### Default State
- Clear icon with appropriate color
- Consistent padding and sizing
- Ready for interaction

#### Hover State
- Subtle visual feedback
- Maintains accessibility standards
- Smooth transitions

#### Active/Pressed State
- Clear indication of interaction
- Consistent with platform conventions

#### Disabled State
- Visually distinct from enabled state
- Clear indication that action is not available
- Maintains layout consistency

## Usage Guidelines

### When to Use
- Toolbar actions (save, edit, delete)
- Navigation controls (close, back, forward)
- Toggle actions (favorite, bookmark)
- Compact interfaces where space is limited
- Actions that are universally understood through icons

### When Not to Use
- When the action is not clear from the icon alone
- For primary actions that need emphasis
- When text labels would improve clarity
- For complex actions that need explanation

## Variants

### Size Variants
- **Small**: For compact interfaces or secondary actions
- **Medium**: Standard size for most use cases
- **Large**: For primary actions or when emphasis is needed

### Color Variants
- **Primary**: Main call-to-action buttons
- **Secondary**: Alternative actions or less important actions

### Signal Variants
- **Success**: For positive actions (save, confirm)
- **Warning**: For potentially destructive actions
- **Error**: For critical actions that need attention
- **Disabled**: For unavailable actions

## Best Practices

1. **Icon Selection**: Use universally recognized icons
2. **Consistency**: Use the same icon for the same action across the app
3. **Accessibility**: Always provide meaningful ARIA labels
4. **Touch Targets**: Ensure minimum 44px touch target size
5. **Visual Feedback**: Provide clear feedback for all states
6. **Grouping**: Group related icon buttons logically

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| size | 'small' | 'medium' | 'large' | No | - |
| color | 'primary' | 'secondary' | No | - |
| children | ComponentChildren | Yes | - |
| onClick | () => void | Yes | - |
| signal | 'disabled' | 'success' | 'warning' | 'error' | No | - |
| fullWidth | boolean | No | - |

## Examples

### Primary

```tsx
<IconButton
  color="primary"
/>
```

### Secondary

```tsx
<IconButton
  color="secondary"
/>
```

### Small

```tsx
<IconButton
  size="small"
/>
```

### Medium

```tsx
<IconButton
  size="medium"
/>
```

### Large

```tsx
<IconButton
  size="large"
/>
```

### Success

```tsx
<IconButton
  signal="success"
/>
```

### Warning

```tsx
<IconButton
  signal="warning"
/>
```

### Error

```tsx
<IconButton
  signal="error"
/>
```

### Disabled

```tsx
<IconButton
  signal="disabled"
/>
```

### FullWidth

```tsx
<IconButton
  fullWidth="true"
/>
```

