// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        },
        titleProp: true,
      },
    }),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.{test,spec,stories}.{ts,tsx}'],
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'legacy',
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  build: {
    target: 'es2015',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'T1Components',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // SOLUCIÓN: React y React DOM como external
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      
      output: {
        preserveModules: false,
        exports: 'named',
        assetFileNames: 'index.css',
        interop: 'auto',
        
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    
    commonjsOptions: {
      transformMixedEsModules: true,
      requireReturnsDefault: 'auto'
    },
    
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
      // IMPORTANTE: Alias para prevenir duplicación de React
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'es2015'
    }
  }
});