# Button Component

## Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| size | 'small' | 'medium' | 'large' | No | - |
| color | 'primary' | 'secondary' | No | - |
| children | string | Yes | - |
| onClick | () => void | Yes | - |
| startIcon | ComponentChildren | No | - |
| endIcon | ComponentChildren | No | - |
| signal | 'neutral' | 'success' | 'warning' | 'error' | No | - |
| disabled | boolean | No | - |
| fullWidth | boolean | No | - |

## Examples

### Default

```tsx
<Button
  children="Button"
/>
```

### Primary

```tsx
<Button
  color="primary"
  children="Primary Button"
/>
```

### Secondary

```tsx
<Button
  color="secondary"
  children="Secondary Button"
/>
```

### Small

```tsx
<Button
  size="small"
  children="Small Button"
/>
```

### Medium

```tsx
<Button
  size="medium"
  children="Medium Button"
/>
```

### Large

```tsx
<Button
  size="large"
  children="Large Button"
/>
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
<Button
  children="Full Width Button"
  fullWidth="true"
/>
```

### Success

```tsx
<Button
  children="Success"
  signal="success"
/>
```

### Warning

```tsx
<Button
  children="Warning"
  signal="warning"
/>
```

### Error

```tsx
<Button
  children="Error"
  signal="error"
/>
```

### Disabled

```tsx
<Button
  children="Disabled"
  disabled="true"
/>
```

