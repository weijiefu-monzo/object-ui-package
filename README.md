# Object UI Components

A Preact UI component library extracted from the Object Linter Figma plugin. This library is built with Preact but can be used in both Preact and React applications.

## Installation

```bash
npm install file:../object-ui-package
```

## Usage

### In Preact Apps

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

### In React Apps

To use this Preact library in a React application, you need to alias `react` and `react-dom` to `preact/compat` in your bundler configuration:

**Vite (`vite.config.js`):**
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
```

**Webpack (`webpack.config.js`):**
```js
module.exports = {
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
};
```

Then install `preact` in your React app:
```bash
npm install preact
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
