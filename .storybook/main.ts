import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';


const config: StorybookConfig = {

  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/assets': path.resolve(__dirname, '../src/assets'),
          '@/styles': path.resolve(__dirname, '../src/styles'),
          '@/utils': path.resolve(__dirname, '../src/utils'),
          '@/types': path.resolve(__dirname, '../src/types'),
        },
      },
    });
  },
  
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;