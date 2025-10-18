# IconButton Component

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

