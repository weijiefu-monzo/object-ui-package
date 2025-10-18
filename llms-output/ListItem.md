# ListItem Component

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

