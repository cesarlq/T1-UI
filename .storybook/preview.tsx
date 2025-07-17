import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from '../src/styles/theme';

// Importar estilos globales si los tienes
import '../src/styles/globals.css';
import { BrowserRouter } from 'react-router-dom';

// Mock Router para componentes que aún usan React Router
const MockRouter = ({ children }: { children: React.ReactNode }) => {
  // Solo usar BrowserRouter si react-router-dom está disponible
  try {
    return <BrowserRouter>{children}</BrowserRouter>;
  } catch {
    // Si no está disponible, renderizar children directamente
    return <>{children}</>;
  }
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Configuración adicional para mejor visualización
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' }
      ],
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: 'default',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
    // Decorator adicional para centrar componentes
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <MockRouter>
          <Story />
        </MockRouter>
      </div>
    ),
  ],
};

export default preview;