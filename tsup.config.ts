import { defineConfig } from 'tsup';
import { readFileSync } from 'fs';


export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@mui/material'],
  noExternal: [/\.css$/, /\.scss$/],
  minify: true,
  treeshake: true,
    esbuildOptions(options) {
        // Para Next.js 13+ App Router
        options.banner = {
        js: '"use client"',
        };
    },
    esbuildPlugins: [
    {
      name: 'svg-loader',
      setup(build) {
        build.onLoad({ filter: /\.svg$/ }, async (args) => {
          const svg = readFileSync(args.path, 'utf8');
          return {
            contents: `export default ${JSON.stringify(svg)}`,
            loader: 'text',
          };
        });
      },
    },
  ],
  onSuccess: 'npm run post-build',
});