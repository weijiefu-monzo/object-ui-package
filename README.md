# Object UI Components

A React/Preact UI component library extracted from the Object Linter Figma plugin.

## Installation

```bash
npm install file:../object-ui-package
```

## Usage

```tsx
import { Button, Modal, Page } from '@object-ui/components';
import '@object-ui/components/styles/primitive.css';
import '@object-ui/components/styles/semantic.css';
import '@object-ui/components/styles/index.css';

function App() {
  return (
    <Page>
      <Button onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </Page>
  );
}
```

## Available Components

- `Button` - Button component with various sizes and colors
- `IconButton` - Button component for icons
- `Modal` - Modal dialog component
- `Page` - Page wrapper component
- `Group` - Container component for grouping elements
- `ListItem` - List item component
- `Switch` - Toggle switch component

## Development

```bash
# Build the package
npm run build

# Watch for changes during development
npm run dev
```

## Styles

The package includes CSS styles in the `styles/` directory:
- `primitive.css` - Basic styling primitives
- `semantic.css` - Semantic color and styling definitions  
- `index.css` - Main styles and typography
