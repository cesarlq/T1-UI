import { defineConfig } from 'tsup';
import { readFileSync } from 'fs';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig([
  // Build principal para JavaScript
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: false,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', 'framer-motion'],
    minify: true,
    treeshake: true,
    esbuildOptions(options) {
      // Para Next.js 13+ App Router
      options.banner = {
        js: '"use client"',
      };
    },
    esbuildPlugins: [
      sassPlugin({
        type: 'css-text',
        cssImports: true,
      }),
      {
        name: 'scss-modules-loader',
        setup(build) {
          // Manejar archivos .module.scss como CSS Modules
          build.onLoad({ filter: /\.module\.(scss|css)$/ }, async (args) => {
            try {
              // Leer el archivo SCSS
              const scss = readFileSync(args.path, 'utf8');
              
              // Para CSS Modules, necesitamos generar nombres de clases únicos
              // Por simplicidad, vamos a usar el nombre del archivo como prefijo
              const fileName = args.path.split('/').pop()?.replace('.module.scss', '') || 'component';
              
              // Crear un objeto de clases CSS Modules simulado
              const classNames: Record<string, string> = {};
              
              // Extraer nombres de clases del SCSS
              const classMatches = scss.match(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g);
              if (classMatches) {
                classMatches.forEach((match) => {
                  const className = match.substring(1); // Remover el punto
                  classNames[className] = `${fileName}_${className}_${Math.random().toString(36).substr(2, 5)}`;
                });
              }
              
              return {
                contents: `export default ${JSON.stringify(classNames)};`,
                loader: 'js',
              };
            } catch (error) {
              console.warn(`Error processing ${args.path}:`, error);
              return {
                contents: `export default {};`,
                loader: 'js',
              };
            }
          });

          // Manejar archivos .scss/.css regulares
          build.onLoad({ filter: /\.(scss|css)$/ }, async (args) => {
            if (args.path.includes('.module.')) return; // Ya manejado arriba
            
            return {
              contents: `export default {};`,
              loader: 'js',
            };
          });
        },
      },
      {
        name: 'svg-loader',
        setup(build) {
          build.onLoad({ filter: /\.svg\?react$/ }, async (args) => {
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
  },
  // Build separado para CSS - solo el archivo principal
  {
    entry: ['src/styles/index.css'],
    outDir: 'dist',
    clean: false,
    minify: true,
    onSuccess: 'npm run post-build',
  },
]);
