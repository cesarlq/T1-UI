// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // IMPORTANTE: Para compatibilidad con React antiguo
      babel: {
        presets: [
          ['@babel/preset-react', {
            runtime: 'classic' // Sin automatic runtime para React < 17
          }]
        ]
      }
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
                  removeViewBox: false,
                  cleanupIds: true,
                  removeUselessDefs: true
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
        api: 'legacy', // Para máxima compatibilidad
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  build: {
    target: 'es2015', // IMPORTANTE: Target antiguo para compatibilidad
    minify: false, // NO minificar para debugging
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'T1Components',
      formats: ['es', 'cjs', 'umd'], // UMD para máxima compatibilidad
      fileName: (format) => {
        const formatNames = {
          es: 'index.es.js',
          cjs: 'index.cjs.js',
          umd: 'index.umd.js'
        };
        return formatNames[format] || `index.${format}.js`;
      }
    },
    rollupOptions: {
      // NO external - incluye TODO
      external: [], // VACÍO - incluye todas las dependencias
      
      output: {
        preserveModules: false,
        exports: 'named',
        assetFileNames: 'index.css',
        interop: 'auto',
        
        // Para UMD
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        
        // Compatibilidad con CommonJS
        format: 'cjs',
        esModule: false
      }
    },
    
    commonjsOptions: {
      transformMixedEsModules: true,
      requireReturnsDefault: 'auto'
    },
    
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    
    // Sin límite de tamaño - es una solución "pesada pero funcional"
    chunkSizeWarningLimit: Infinity
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
    }
  },
  
  // Para compatibilidad con módulos antiguos
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2015'
    }
  }
});