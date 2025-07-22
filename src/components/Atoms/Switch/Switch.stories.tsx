import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box, Paper, Typography, Stack, Divider, Chip } from '@mui/material';
import { Switch, FormSwitch } from './Switch';

const meta = {
  title: 'atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Switch toggle para estados binarios. Accesible y personalizable.

## Características
- ✅ Estados: activo, inactivo, deshabilitado
- ✅ Integración con formularios
- ✅ API simplificada con \`onValueChange\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado controlado del switch',
      table: {
        category: 'State',
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Estado inicial no controlado',
      table: {
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el switch',
      table: {
        category: 'State',
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback cuando cambia el valor',
      table: {
        category: 'Events',
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Label para accesibilidad (requerido)',
      table: {
        category: 'Accessibility',
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Estados básicos
export const Default: Story = {
  args: {
    ariaLabel: 'Toggle setting',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    ariaLabel: 'Toggle setting',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ariaLabel: 'Toggle setting',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    ariaLabel: 'Toggle setting',
  },
};


// Estados visuales como en la imagen original
export const AllStates: Story = {
  name: 'Estados Visuales',
  render: () => (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Switch checked={true} ariaLabel="Active state" />
        <Typography variant="body2" color="text.secondary">
          Activo
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Switch checked={false} ariaLabel="Inactive state" />
        <Typography variant="body2" color="text.secondary">
          Inactivo
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Switch disabled ariaLabel="Disabled state" />
        <Typography variant="body2" color="text.secondary">
          Deshabilitado
        </Typography>
      </Box>
    </Stack>
  ),
};

// Ejemplo controlado
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <Stack spacing={2} alignItems="center">
        <Switch 
          checked={checked} 
          onValueChange={setChecked}
          ariaLabel="Controlled switch"
        />
        <Chip 
          label={checked ? 'Activado' : 'Desactivado'}
          color={checked ? 'success' : 'default'}
          size="small"
        />
      </Stack>
    );
  },
};

// Con label
export const WithLabel: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);
    
    return (
      <Stack spacing={2}>
        <FormSwitch
          label="Notificaciones push"
          checked={notifications}
          onValueChange={setNotifications}
          ariaLabel="Activar notificaciones push"
        />
        <FormSwitch
          label="Emails de marketing"
          checked={marketing}
          onValueChange={setMarketing}
          ariaLabel="Activar emails de marketing"
        />
        <FormSwitch
          label="Función no disponible"
          disabled
          ariaLabel="Función deshabilitada"
        />
      </Stack>
    );
  },
};

// Posición del label
export const LabelPlacement: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    
    return (
      <Stack spacing={3}>
        <FormSwitch
          label="Label al final (default)"
          checked={value}
          onValueChange={setValue}
          labelPlacement="end"
          ariaLabel="Label al final"
        />
        <FormSwitch
          label="Label al inicio"
          checked={value}
          onValueChange={setValue}
          labelPlacement="start"
          ariaLabel="Label al inicio"
        />
        <FormSwitch
          label="Label arriba"
          checked={value}
          onValueChange={setValue}
          labelPlacement="top"
          ariaLabel="Label arriba"
        />
        <FormSwitch
          label="Label abajo"
          checked={value}
          onValueChange={setValue}
          labelPlacement="bottom"
          ariaLabel="Label abajo"
        />
      </Stack>
    );
  },
};

// Casos de uso reales
export const RealWorldExample: Story = {
  name: 'Ejemplo: Panel de Configuración',
  render: () => {
    const [settings, setSettings] = useState({
      darkMode: false,
      notifications: true,
      autoSave: true,
      betaFeatures: false,
    });
    
    const updateSetting = (key: keyof typeof settings) => (value: boolean) => {
      setSettings(prev => ({ ...prev, [key]: value }));
    };
    
    return (
      <Paper sx={{ width: '100%', maxWidth: 400, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Configuración
        </Typography>
        
        <Stack spacing={3}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography variant="body1" fontWeight="medium">
                Modo oscuro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cambiar el tema de la aplicación
              </Typography>
            </Box>
            <Switch 
              checked={settings.darkMode}
              onValueChange={updateSetting('darkMode')}
              ariaLabel="Activar modo oscuro"
            />
          </Box>
          
          <Divider />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography variant="body1" fontWeight="medium">
                Notificaciones
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recibir alertas importantes
              </Typography>
            </Box>
            <Switch 
              checked={settings.notifications}
              onValueChange={updateSetting('notifications')}
              ariaLabel="Activar notificaciones"
            />
          </Box>
          
          <Divider />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography variant="body1" fontWeight="medium">
                Guardado automático
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Guardar cambios automáticamente
              </Typography>
            </Box>
            <Switch 
              checked={settings.autoSave}
              onValueChange={updateSetting('autoSave')}
              ariaLabel="Activar guardado automático"
            />
          </Box>
          
          <Divider />
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            opacity: 0.6 
          }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Typography variant="body1" fontWeight="medium">
                Funciones beta
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Próximamente disponible
              </Typography>
            </Box>
            <Switch 
              disabled
              checked={settings.betaFeatures}
              ariaLabel="Funciones beta (no disponible)"
            />
          </Box>
        </Stack>
      </Paper>
    );
  },
};

// Integración con formularios
export const FormIntegration: Story = {
  name: 'Ejemplo: Formulario de Preferencias',
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      privacy: true,
    });
    
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      console.log('Form submitted:', formData);
    };
    
    const updateField = (field: keyof typeof formData) => (value: boolean) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      setSubmitted(false);
    };
    
    return (
      <Paper 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ width: '100%', maxWidth: 400, p: 3 }}
      >
        <Typography variant="h6" gutterBottom>
          Preferencias de comunicación
        </Typography>
        
        <Stack spacing={2} sx={{ my: 3 }}>
          <FormSwitch
            label="Recibir newsletter semanal"
            checked={formData.newsletter}
            onValueChange={updateField('newsletter')}
            ariaLabel="Suscribirse al newsletter"
          />
          
          <FormSwitch
            label="Acepto los términos y condiciones"
            checked={formData.terms}
            onValueChange={updateField('terms')}
            ariaLabel="Aceptar términos y condiciones"
          />
          
          <FormSwitch
            label="He leído la política de privacidad"
            checked={formData.privacy}
            onValueChange={updateField('privacy')}
            ariaLabel="Confirmar lectura de política de privacidad"
          />
        </Stack>
        
        {submitted && (
          <Box sx={{ mb: 2 }}>
            <Chip 
              label="Formulario enviado con éxito" 
              color="success" 
              size="small"
            />
          </Box>
        )}
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <button type="button" style={{ 
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }}>
            Cancelar
          </button>
          <button 
            type="submit" 
            disabled={!formData.terms || !formData.privacy}
            style={{ 
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              background: formData.terms && formData.privacy ? '#10B981' : '#ccc',
              color: 'white',
              cursor: formData.terms && formData.privacy ? 'pointer' : 'not-allowed'
            }}
          >
            Guardar
          </button>
        </Box>
      </Paper>
    );
  },
};

// Grupo de switches
export const SwitchGroup: Story = {
  name: 'Ejemplo: Permisos de Usuario',
  render: () => {
    const [permissions, setPermissions] = useState({
      read: true,
      write: false,
      delete: false,
      admin: false,
    });
    
    const updatePermission = (key: keyof typeof permissions) => (value: boolean) => {
      setPermissions(prev => ({ ...prev, [key]: value }));
    };
    
    return (
      <Paper sx={{ p: 3, maxWidth: 350 }}>
        <Typography variant="h6" gutterBottom>
          Permisos de Usuario
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Configura los permisos para este rol
        </Typography>
        
        <Stack spacing={2}>
          <FormSwitch
            label="Lectura"
            checked={permissions.read}
            onValueChange={updatePermission('read')}
            ariaLabel="Permiso de lectura"
          />
          <FormSwitch
            label="Escritura"
            checked={permissions.write}
            onValueChange={updatePermission('write')}
            ariaLabel="Permiso de escritura"
          />
          <FormSwitch
            label="Eliminación"
            checked={permissions.delete}
            onValueChange={updatePermission('delete')}
            ariaLabel="Permiso de eliminación"
          />
          <Divider sx={{ my: 1 }} />
          <FormSwitch
            label="Administrador"
            checked={permissions.admin}
            onValueChange={updatePermission('admin')}
            ariaLabel="Permiso de administrador"
            formControlLabelProps={{
              sx: { 
                '& .MuiFormControlLabel-label': { 
                  fontWeight: 'bold' 
                } 
              }
            }}
          />
        </Stack>
        
        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Permisos activos: {Object.entries(permissions).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'Ninguno'}
          </Typography>
        </Box>
      </Paper>
    );
  },
};