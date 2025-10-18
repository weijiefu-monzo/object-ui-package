# Select Component

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

