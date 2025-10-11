// .storybook/main.ts
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import type { StorybookConfig } from '@storybook/preact-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    // '@storybook/addon-essentials', // optional: includes controls, actions, etc.
  ],
  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
  viteFinal: async (viteConfig) => {
    // React/Preact compat aliases
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias || {}),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    };

    // Environment variables
    viteConfig.define = {
      ...(viteConfig.define || {}),
      'process.env.NODE_ENV': '"development"',
    };

    return viteConfig;
  },
};

export default config;
