import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion'],
  minify: true,
  treeshake: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  esbuildPlugins: [
    sassPlugin(),
    {
      name: 'svg-loader',
      setup(build) {
        build.onLoad({ filter: /\.svg\?react$/ }, async (args) => {
          const { readFileSync } = await import('fs');
          const svg = readFileSync(args.path.replace('?react', ''), 'utf8');
          return {
            contents: `
              import React from 'react';
              const SvgComponent = (props) => React.createElement('svg', { ...props, dangerouslySetInnerHTML: { __html: ${JSON.stringify(svg.replace(/<svg[^>]*>|<\/svg>/g, ''))} } });
              export default SvgComponent;
            `,
            loader: 'jsx',
          };
        });
        build.onLoad({ filter: /\.svg$/ }, async (args) => {
          const { readFileSync } = await import('fs');
          const svg = readFileSync(args.path, 'utf8');
          return {
            contents: `
              import React from 'react';
              const SvgComponent = (props) => React.createElement('svg', { ...props, dangerouslySetInnerHTML: { __html: ${JSON.stringify(svg.replace(/<svg[^>]*>|<\/svg>/g, ''))} } });
              export default SvgComponent;
            `,
            loader: 'jsx',
          };
        });
      },
    },
  ],
  onSuccess: 'npm run post-build',
});
