// Radio.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box, Paper, Typography, Stack, Divider, Chip } from '@mui/material';
import { Radio, RadioGroup, FormRadio } from './Radio';

const meta = {
  title: 'atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Radio button para selección única entre múltiples opciones.

## Características
- ✅ Estados: checked, unchecked, disabled
- ✅ RadioGroup para manejo de estado
- ✅ Integración con formularios
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado seleccionado del radio',
      table: {
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el radio',
      table: {
        category: 'State',
      },
    },
    value: {
      control: 'text',
      description: 'Valor del radio button',
      table: {
        category: 'Form',
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Label para accesibilidad',
      table: {
        category: 'Accessibility',
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Estados básicos
export const Default: Story = {
  args: {
    ariaLabel: 'Radio button',
    value: 'default',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    ariaLabel: 'Radio button checked',
    value: 'checked',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ariaLabel: 'Radio button disabled',
    value: 'disabled',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    ariaLabel: 'Radio button disabled checked',
    value: 'disabled-checked',
  },
};

// Estados visuales como en la imagen
export const AllStates: Story = {
  name: 'Estados Visuales',
  render: () => (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Radio checked={true} value="1" ariaLabel="Selected state" />
        <Typography variant="body2" color="text.secondary">
          Seleccionado
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Radio checked={false} value="2" ariaLabel="Unselected state" />
        <Typography variant="body2" color="text.secondary">
          No seleccionado
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Radio disabled value="3" ariaLabel="Disabled state" />
        <Typography variant="body2" color="text.secondary">
          Deshabilitado
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Radio disabled checked value="4" ariaLabel="Disabled checked state" />
        <Typography variant="body2" color="text.secondary">
          Deshabilitado seleccionado
        </Typography>
      </Box>
    </Stack>
  ),
};

// RadioGroup básico
export const RadioGroupExample: Story = {
  name: 'Radio Group',
  render: () => {
    const [value, setValue] = useState('option1');
    
    return (
      <Stack spacing={2}>
        <RadioGroup value={value} onValueChange={setValue}>
          <FormRadio value="option1" label="Opción 1" />
          <FormRadio value="option2" label="Opción 2" />
          <FormRadio value="option3" label="Opción 3" />
          <FormRadio value="option4" label="Opción 4" disabled />
        </RadioGroup>
        
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            Valor seleccionado: <strong>{value}</strong>
          </Typography>
        </Box>
      </Stack>
    );
  },
};

// Orientación horizontal
export const HorizontalGroup: Story = {
  name: 'Radio Group - Horizontal',
  render: () => {
    const [value, setValue] = useState('1');
    
    return (
      <RadioGroup value={value} onValueChange={setValue} row>
        <FormRadio value="1" label="Opción 1" />
        <FormRadio value="2" label="Opción 2" />
        <FormRadio value="3" label="Opción 3" />
        <FormRadio value="4" label="Opción 4" disabled />
      </RadioGroup>
    );
  },
};

// Caso de uso real: Método de pago
export const PaymentMethod: Story = {
  name: 'Ejemplo: Método de Pago',
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    
    const paymentOptions = [
      { value: 'card', label: 'Tarjeta de crédito/débito', description: 'Visa, Mastercard, Amex' },
      { value: 'paypal', label: 'PayPal', description: 'Pago seguro con PayPal' },
      { value: 'transfer', label: 'Transferencia bancaria', description: '3-5 días hábiles' },
      { value: 'cash', label: 'Pago en efectivo', description: 'En punto de entrega', disabled: true },
    ];
    
    return (
      <Paper sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Método de pago
        </Typography>
        
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          {paymentOptions.map((option) => (
            <Box
              key={option.value}
              sx={{
                p: 2,
                mb: 1,
                border: '1px solid',
                borderColor: paymentMethod === option.value ? 'primary.main' : 'grey.300',
                borderRadius: 1,
                cursor: option.disabled ? 'not-allowed' : 'pointer',
                opacity: option.disabled ? 0.6 : 1,
                bgcolor: paymentMethod === option.value ? 'primary.50' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              <FormRadio
                value={option.value}
                label={
                  <Box>
                    <Typography variant="body1" fontWeight="medium">
                      {option.label}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {option.description}
                    </Typography>
                  </Box>
                }
                disabled={option.disabled}
              />
            </Box>
          ))}
        </RadioGroup>
        
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            style={{
              padding: '10px 24px',
              border: 'none',
              borderRadius: '4px',
              background: '#EF4444',
              color: 'white',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Continuar con {paymentOptions.find(o => o.value === paymentMethod)?.label}
          </button>
        </Box>
      </Paper>
    );
  },
};

// Caso de uso: Encuesta
export const SurveyQuestion: Story = {
  name: 'Ejemplo: Pregunta de Encuesta',
  render: () => {
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = () => {
      if (answer) {
        setSubmitted(true);
      }
    };
    
    return (
      <Paper sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Encuesta de satisfacción
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          ¿Cómo calificarías tu experiencia general con nuestro servicio?
        </Typography>
        
        <RadioGroup value={answer} onValueChange={setAnswer}>
          <FormRadio value="5" label="Excelente" />
          <FormRadio value="4" label="Buena" />
          <FormRadio value="3" label="Regular" />
          <FormRadio value="2" label="Mala" />
          <FormRadio value="1" label="Muy mala" />
        </RadioGroup>
        
        {submitted && (
          <Box sx={{ mt: 2 }}>
            <Chip 
              label="¡Gracias por tu respuesta!" 
              color="success" 
              size="small"
            />
          </Box>
        )}
        
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleSubmit}
            disabled={!answer || submitted}
            style={{
              padding: '8px 20px',
              border: 'none',
              borderRadius: '4px',
              background: answer && !submitted ? '#EF4444' : '#ccc',
              color: 'white',
              cursor: answer && !submitted ? 'pointer' : 'not-allowed',
            }}
          >
            {submitted ? 'Enviado' : 'Enviar respuesta'}
          </button>
        </Box>
      </Paper>
    );
  },
};

// Caso de uso: Configuración
export const SettingsExample: Story = {
  name: 'Ejemplo: Configuración de Tema',
  render: () => {
    const [theme, setTheme] = useState('system');
    const [language, setLanguage] = useState('es');
    
    return (
      <Paper sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Preferencias
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle1" gutterBottom fontWeight="medium">
              Tema de la aplicación
            </Typography>
            <RadioGroup value={theme} onValueChange={setTheme}>
              <FormRadio value="light" label="Claro" />
              <FormRadio value="dark" label="Oscuro" />
              <FormRadio value="system" label="Seguir al sistema" />
            </RadioGroup>
          </Box>
          
          <Divider />
          
          <Box>
            <Typography variant="subtitle1" gutterBottom fontWeight="medium">
              Idioma
            </Typography>
            <RadioGroup value={language} onValueChange={setLanguage}>
              <FormRadio value="es" label="Español" />
              <FormRadio value="en" label="English" />
              <FormRadio value="pt" label="Português" />
              <FormRadio value="fr" label="Français (próximamente)" disabled />
            </RadioGroup>
          </Box>
        </Stack>
        
        <Box sx={{ mt: 4, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Tema: <strong>{theme}</strong> | Idioma: <strong>{language.toUpperCase()}</strong>
          </Typography>
        </Box>
      </Paper>
    );
  },
};