# ListItem Component

## Design Guidelines

## Overview
The ListItem component is a flexible container for displaying structured information in lists, with support for avatars, actions, and various layouts.

## Design Principles

### Information Hierarchy
- Clear primary and secondary information
- Consistent spacing and alignment
- Visual hierarchy through typography and spacing

### Interactive Elements
- Clear indication of clickable areas
- Proper focus management
- Accessible interaction patterns

### Flexibility
- Support for various content types
- Adaptable to different use cases
- Consistent visual treatment

## States

#### Default State
- Clear visual structure
- Ready for interaction
- Consistent spacing and alignment

#### Hover State
- Subtle visual feedback
- Clear indication of interactivity
- Smooth transitions

#### Active/Pressed State
- Clear indication of interaction
- Consistent with platform conventions

#### Disabled State
- Visually distinct from enabled state
- Clear indication of unavailability
- Maintains layout consistency

## Usage Guidelines

### When to Use
- User lists (contacts, team members)
- Content lists (articles, products)
- Navigation items
- Settings or configuration items
- Any structured data display

### When Not to Use
- For simple text display
- When complex layouts are needed
- For single-line content without structure

## Variants

### Content Variants
- **Basic**: Label and description only
- **With Avatar**: Includes avatar/icon
- **With Action**: Includes action buttons
- **Complex**: Multiple elements combined

### Layout Variants
- **Outlined**: With border outline
- **Clickable**: Entire item is interactive
- **Static**: Display only, no interaction

## Best Practices

1. **Consistency**: Use consistent spacing and alignment
2. **Accessibility**: Ensure proper focus management and ARIA labels
3. **Visual Hierarchy**: Use typography to establish information priority
4. **Actions**: Place actions logically and consistently
5. **Responsiveness**: Ensure items work well on different screen sizes
6. **Loading States**: Consider loading and empty states

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| avatar | ComponentChildren | No | - |
| label | string | No | - |
| description | string | No | - |
| action | ComponentChildren | No | - |
| onClick | () => void | No | - |
| outlined | boolean | No | - |

## Examples

### Default

```tsx
<ListItem
  label="List Item"
  description="This is a description for the list item"
/>
```

### WithAvatar

```tsx
<ListItem
  label="John Doe"
  description="Software Engineer"
/>
```

### WithAction

```tsx
<ListItem
  label="Favorite Item"
  description="Click the heart to favorite this item"
/>
```

### ComplexItem

```tsx
<ListItem
  label="Jane Smith"
  description="Product Manager at Tech Corp"
/>
```

### Clickable

```tsx
<ListItem
  label="Clickable Item"
  description="This entire item is clickable"
  onClick="fn"
/>
```

### Outlined

```tsx
<ListItem
  outlined="true"
  label="Outlined Item"
  description="This item has an outline"
/>
```

