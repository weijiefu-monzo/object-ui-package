# Button Component

## Design Guidelines

## Overview

The Button component is a fundamental interactive element that allows users to perform actions or navigate through the interface.

## Design Principles

### Visual Hierarchy

- Primary buttons should be the most prominent action on a page
- Secondary buttons provide alternative actions
- Use appropriate sizing to match the importance of the action

### Accessibility

- Ensure sufficient color contrast ratios
- Provide clear visual feedback for different states
- Support keyboard navigation

## States

#### Default State

- Clear, readable text
- Appropriate padding and spacing
- Consistent with design system colors

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

- Primary actions (Submit, Save, Continue)
- Secondary actions (Cancel, Back, Edit)
- Navigation actions (Next, Previous)
- Destructive actions (Delete, Remove) - use with caution

### When Not to Use

- For navigation that should use links
- For actions that don't require user confirmation
- When space is extremely limited (consider icon buttons)

## Variants

### Size Variants

- **Small**: For compact interfaces or secondary actions
- **Medium**: Standard size for most use cases
- **Large**: For primary actions or when emphasis is needed

### Color Variants

- **Primary**: Main call-to-action buttons
- **Secondary**: Alternative actions or less important actions

### Signal Variants

- **Success**: For positive actions (Save, Confirm)
- **Warning**: For potentially destructive actions
- **Error**: For critical actions that need attention
- **Neutral**: Default state

## Best Practices

1. **Consistency**: Use the same button style for similar actions
2. **Clarity**: Use clear, action-oriented text
3. **Hierarchy**: Establish clear visual hierarchy with button styles
4. **Accessibility**: Ensure all buttons are keyboard accessible
5. **Feedback**: Provide clear visual feedback for all states

## Props

| Property  | Type              | Required    | Description |
| --------- | ----------------- | ----------- | ----------- | ------- | --- | --- |
| size      | 'small'           | 'medium'    | 'large'     | No      | -   |
| color     | 'primary'         | 'secondary' | No          | -       |
| children  | string            | Yes         | -           |
| onClick   | () => void        | Yes         | -           |
| startIcon | ComponentChildren | No          | -           |
| endIcon   | ComponentChildren | No          | -           |
| signal    | 'neutral'         | 'success'   | 'warning'   | 'error' | No  | -   |
| disabled  | boolean           | No          | -           |
| fullWidth | boolean           | No          | -           |

## Examples

### Default

```tsx
<Button children="Button" />
```

### Primary

```tsx
<Button color="primary" children="Primary Button" />
```

### Secondary

```tsx
<Button color="secondary" children="Secondary Button" />
```

### Small

```tsx
<Button size="small" children="Small Button" />
```

### Medium

```tsx
<Button size="medium" children="Medium Button" />
```

### Large

```tsx
<Button size="large" children="Large Button" />
```

### WithStartIcon

```tsx
<Button
  children="With Icon"
  startIcon="(<AiOutlinePlus />) as ComponentChildren"
/>
```

### WithEndIcon

```tsx
<Button
  children="With Icon"
  endIcon="(<AiOutlineHeart />) as ComponentChildren"
/>
```

### FullWidth

```tsx
<Button children="Full Width Button" fullWidth="true" />
```

### Success

```tsx
<Button children="Success" signal="success" />
```

### Warning

```tsx
<Button children="Warning" signal="warning" />
```

### Error

```tsx
<Button children="Error" signal="error" />
```

### Disabled

```tsx
<Button children="Disabled" disabled="true" />
```
