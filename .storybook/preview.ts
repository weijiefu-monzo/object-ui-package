import type { Preview } from '@storybook/preact-vite';
import '../styles/primitive.css';
import '../styles/semantic.css';
import '../styles/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: 'var(--color-background-canvas)' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;