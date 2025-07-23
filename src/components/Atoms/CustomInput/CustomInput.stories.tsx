import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';
import { ChangeEvent, useState } from 'react';
import { InputAdornment, Button, Box } from '@mui/material';
import { CheckCircleIcon, SearchIcon } from 'lucide-react';
import { CustomInputI } from './CustomInput.types';
import { useForm, Controller } from 'react-hook-form';

const meta: Meta<typeof CustomInput> = {
  title: 'atoms/CustomInput',
  component: CustomInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomInput>;

// Story con estado para manejar el valor del input
const Template = (args: CustomInputI) => {
  const [value, setValue] = useState('');

  return (
    <CustomInput
      {...args}
      textFieldProps={{
        ...args.textFieldProps,
        value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
      }}
    />
  );
};

export const Default: Story = {
  render: () => (
    <Template
      label="Nombre"
      textFieldProps={{
        placeholder: 'Ingresa tu nombre',
        fullWidth: true,
        variant: 'outlined',
      }}
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <Template
      label="Correo electrónico"
      errorMessage="El correo es inválido"
      textFieldProps={{
        placeholder: 'ejemplo@correo.com',
        fullWidth: true,
        variant: 'outlined',
        error: true,
      }}
    />
  ),
};

export const WithChangeIndicator: Story = {
  render: () => (
    <Template
      label="Teléfono"
      hasChange
      textFieldProps={{
        placeholder: 'Ingresa tu teléfono',
        fullWidth: true,
        variant: 'outlined',
      }}
    />
  ),
};


export const WithStartIcon: Story = {
  render: () => (
    <Template
      label="Buscar"
      textFieldProps={{
        placeholder: 'Buscar producto',
        fullWidth: true,
        variant: 'outlined',
        InputProps: {
          startAdornment: <SearchIcon color="gray" width={'20px'} style={{marginRight: '1rem'}}/>
        },
      }}
    />
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <Template
      label="Validado"
      textFieldProps={{
        placeholder: 'Campo validado',
        fullWidth: true,
        variant: 'outlined',
        InputProps: {
          endAdornment: <CheckCircleIcon width={'20px'} color="green" style={{marginLeft:'1rem'}}/>
        },
      }}
    />
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Template
      label="Contraseña"
      textFieldProps={{
        placeholder: 'Ingresa tu contraseña',
        fullWidth: true,
        variant: 'outlined',
        type: 'password',
        helperText: 'La contraseña debe tener al menos 8 caracteres',
      }}
    />
  ),
};

export const WithRegisterAndValidation: Story = {
  render: () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    });

    const onSubmit = (data: any) => {
      console.log('Form data:', data);
      alert('Formulario enviado correctamente. Revisa la consola para ver los datos.');
    };

    return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <CustomInput
          label="Correo electrónico"
          textFieldProps={{
            placeholder: 'ejemplo@correo.com',
            fullWidth: true,
            variant: 'outlined',
            helperText: 'Ingresa un correo válido',
            error: !!errors.email,
            ...register('email', {
              required: 'El correo es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Formato de correo inválido'
              }
            })
          }}
          // errorMessage={errors.email?.message}
        />

        <CustomInput
          label="Contraseña"
          textFieldProps={{
            placeholder: 'Ingresa tu contraseña',
            fullWidth: true,
            variant: 'outlined',
            type: 'password',
            helperText: 'Mínimo 8 caracteres, incluye mayúsculas y números',
            error: !!errors.password,
            ...register('password', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'Debe incluir mayúsculas, minúsculas y números'
              }
            })
          }}
          // errorMessage={errors.password?.message}
        />

        <CustomInput
          label="Confirmar contraseña"
          textFieldProps={{
            placeholder: 'Confirma tu contraseña',
            fullWidth: true,
            variant: 'outlined',
            type: 'password',
            helperText: 'Debe coincidir con la contraseña anterior',
            error: !!errors.confirmPassword,
            ...register('confirmPassword', {
              required: 'Confirma tu contraseña',
              validate: (value, formValues) => 
                value === formValues.password || 'Las contraseñas no coinciden'
            })
          }}
          // errorMessage={errors.confirmPassword?.message}
        />

        <Button 
          type="submit" 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Enviar formulario
        </Button>
      </Box>
    );
  },
};

export const WithControllerAndRegister: Story = {
  render: () => {
    const { control, register, handleSubmit, formState: { errors }, watch } = useForm({
      defaultValues: {
        username: '',
        phone: ''
      }
    });

    const watchedUsername = watch('username');

    const onSubmit = (data: any) => {
      console.log('Form data:', data);
      alert('Datos del formulario enviados. Revisa la consola.');
    };

    return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        {/* Usando register directamente */}
        <CustomInput
          label="Nombre de usuario"
          hasChange={!!watchedUsername}
          textFieldProps={{
            placeholder: 'Ingresa tu nombre de usuario',
            fullWidth: true,
            variant: 'outlined',
            helperText: 'Solo letras, números y guiones bajos',
            error: !!errors.username,
            ...register('username', {
              required: 'El nombre de usuario es requerido',
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: 'Solo se permiten letras, números y guiones bajos'
              },
              minLength: {
                value: 3,
                message: 'Mínimo 3 caracteres'
              }
            })
          }}
          // errorMessage={errors.username?.message}
        />

        {/* Usando Controller para mayor control */}
        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'El teléfono es requerido',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Debe ser un número de 10 dígitos'
            }
          }}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Teléfono"
              hasChange={!!field.value}
              textFieldProps={{
                ...field,
                placeholder: '1234567890',
                fullWidth: true,
                variant: 'outlined',
                helperText: 'Ingresa 10 dígitos sin espacios ni guiones',
                error: !!fieldState.error,
                type: 'tel'
              }}
              // errorMessage={fieldState.error?.message}
            />
          )}
        />

        <Button 
          type="submit" 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </Box>
    );
  },
};

export const WithFocusEvents: Story = {
  render: () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [focusHistory, setFocusHistory] = useState<string[]>([]);
    const [values, setValues] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    });

    const handleFocus = (fieldName: string) => {
      setFocusedField(fieldName);
      setFocusHistory(prev => [...prev, `${fieldName} focused`]);
      console.log(`Campo ${fieldName} recibió focus`);
    };

    const handleBlur = (fieldName: string) => {
      setFocusedField(null);
      setFocusHistory(prev => [...prev, `${fieldName} lost focus`]);
      console.log(`Campo ${fieldName} perdió focus`);
    };

    const handleChange = (fieldName: string, value: string) => {
      setValues(prev => ({ ...prev, [fieldName]: value }));
    };

    const clearHistory = () => {
      setFocusHistory([]);
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <Box sx={{ mb: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Estado del Focus:</h4>
          <p style={{ margin: '0 0 8px 0' }}>
            <strong>Campo activo:</strong> {focusedField || 'Ninguno'}
          </p>
          <Button 
            size="small" 
            onClick={clearHistory}
            variant="outlined"
            sx={{ mb: 1 }}
          >
            Limpiar historial
          </Button>
          <Box sx={{ maxHeight: 100, overflow: 'auto', fontSize: '0.875rem' }}>
            <strong>Historial de eventos:</strong>
            {focusHistory.length === 0 ? (
              <p style={{ margin: '4px 0', fontStyle: 'italic' }}>Haz click en los campos para ver los eventos</p>
            ) : (
              focusHistory.slice(-5).map((event, index) => (
                <p key={index} style={{ margin: '2px 0' }}>• {event}</p>
              ))
            )}
          </Box>
        </Box>

        <CustomInput
          label="Correo electrónico"
          textFieldProps={{
            placeholder: 'ejemplo@correo.com',
            fullWidth: true,
            variant: 'outlined',
            helperText: focusedField === 'email' 
              ? '✨ Campo activo - Ingresa un correo válido' 
              : 'Haz click para activar el campo',
            value: values.email,
            onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value),
            onFocus: () => handleFocus('email'),
            onBlur: () => handleBlur('email'),
            sx: {
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused': {
                  '& fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 2,
                  },
                },
              },
            }
          }}
          hasChange={!!values.email}
        />

        <CustomInput
          label="Contraseña"
          textFieldProps={{
            placeholder: 'Ingresa tu contraseña',
            fullWidth: true,
            variant: 'outlined',
            type: 'password',
            helperText: focusedField === 'password' 
              ? '🔒 Campo activo - Mínimo 8 caracteres' 
              : 'Haz click para ingresar contraseña',
            value: values.password,
            onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value),
            onFocus: () => handleFocus('password'),
            onBlur: () => handleBlur('password'),
            sx: {
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused': {
                  '& fieldset': {
                    borderColor: 'secondary.main',
                    borderWidth: 2,
                  },
                },
              },
            }
          }}
          hasChange={!!values.password}
        />

        <CustomInput
          label="Confirmar contraseña"
          textFieldProps={{
            placeholder: 'Confirma tu contraseña',
            fullWidth: true,
            variant: 'outlined',
            type: 'password',
            helperText: focusedField === 'confirmPassword' 
              ? '🔄 Campo activo - Debe coincidir con la contraseña' 
              : 'Haz click para confirmar contraseña',
            value: values.confirmPassword,
            onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange('confirmPassword', e.target.value),
            onFocus: () => handleFocus('confirmPassword'),
            onBlur: () => handleBlur('confirmPassword'),
            sx: {
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused': {
                  '& fieldset': {
                    borderColor: 'success.main',
                    borderWidth: 2,
                  },
                },
              },
            }
          }}
          hasChange={!!values.confirmPassword}
          errorMessage={
            values.confirmPassword && values.password && values.confirmPassword !== values.password
              ? 'Las contraseñas no coinciden'
              : undefined
          }
        />

        <Box sx={{ mt: 2, p: 2, bgcolor: 'info.light', borderRadius: 1, color: 'info.contrastText' }}>
          <strong>💡 Instrucciones:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li>Haz click en cualquier campo para ver el evento onFocus</li>
            <li>Haz click fuera del campo para ver el evento onBlur</li>
            <li>Observa cómo cambia el helper text cuando el campo está activo</li>
            <li>Los bordes cambian de color cuando cada campo recibe focus</li>
            <li>El historial muestra los últimos 5 eventos</li>
          </ul>
        </Box>
      </Box>
    );
  },
};

export const WithFocusAndReactHookForm: Story = {
  render: () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [focusHistory, setFocusHistory] = useState<string[]>([]);
    
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
      defaultValues: {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      }
    });

    const watchedValues = watch();

    const handleInputFocus = (fieldName: string) => {
      setFocusedField(fieldName);
      setFocusHistory(prev => [...prev, `${fieldName} focused`]);
      console.log(`Campo ${fieldName} recibió focus`);
    };

    const handleInputBlur = (fieldName: string) => {
      setFocusedField(null);
      setFocusHistory(prev => [...prev, `${fieldName} lost focus`]);
      console.log(`Campo ${fieldName} perdió focus`);
    };

    const onSubmit = (data: any) => {
      console.log('Form data:', data);
      alert('Formulario enviado correctamente. Revisa la consola para ver los datos.');
    };

    const clearHistory = () => {
      setFocusHistory([]);
    };

    // Reglas de validación como las tendrías en tu código
    const validationRules = {
      cardNumber: {
        required: 'El número de tarjeta es requerido',
        pattern: {
          value: /^[0-9]{16}$/,
          message: 'Debe ser un número de 16 dígitos'
        }
      },
      expiryDate: {
        required: 'La fecha de expiración es requerida',
        pattern: {
          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
          message: 'Formato debe ser MM/YY'
        }
      },
      cvv: {
        required: 'El CVV es requerido',
        pattern: {
          value: /^[0-9]{3}$/,
          message: 'Debe ser un número de 3 dígitos'
        }
      }
    };

    return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        <Box sx={{ mb: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <h4 style={{ margin: '0 0 8px 0' }}>React Hook Form + onFocus (Método Actualizado):</h4>
          <p style={{ margin: '0 0 8px 0' }}>
            <strong>Campo activo:</strong> {focusedField || 'Ninguno'}
          </p>
          <Button 
            size="small" 
            onClick={clearHistory}
            variant="outlined"
            sx={{ mb: 1 }}
          >
            Limpiar historial
          </Button>
          <Box sx={{ maxHeight: 100, overflow: 'auto', fontSize: '0.875rem' }}>
            <strong>Historial de eventos:</strong>
            {focusHistory.length === 0 ? (
              <p style={{ margin: '4px 0', fontStyle: 'italic' }}>Haz click en los campos para ver los eventos</p>
            ) : (
              focusHistory.slice(-5).map((event, index) => (
                <p key={index} style={{ margin: '2px 0' }}>• {event}</p>
              ))
            )}
          </Box>
        </Box>

        {/* Exactamente como lo tienes implementado */}
        <CustomInput
          label="Número de tarjeta"
          hasChange={!!watchedValues.cardNumber}
          textFieldProps={{
            fullWidth: false,
            select: false,
            ...register("cardNumber", validationRules.cardNumber),
            error: !!errors.cardNumber,
            onFocus: () => handleInputFocus("cardNumber"),
            inputProps: {
              maxLength: 16,
            },
            placeholder: '1234 5678 9012 3456',
            variant: 'outlined',
            helperText: focusedField === 'cardNumber' 
              ? '💳 Campo activo - Ingresa 16 dígitos' 
              : 'Haz click para ingresar número de tarjeta',
          }}
          errorMessage={errors.cardNumber?.message}
        />

        <CustomInput
          label="Fecha de expiración"
          hasChange={!!watchedValues.expiryDate}
          textFieldProps={{
            fullWidth: false,
            select: false,
            ...register("expiryDate", validationRules.expiryDate),
            error: !!errors.expiryDate,
            onFocus: () => handleInputFocus("expiryDate"),
            inputProps: {
              maxLength: 5,
            },
            placeholder: 'MM/YY',
            variant: 'outlined',
            helperText: focusedField === 'expiryDate' 
              ? '📅 Campo activo - Formato MM/YY' 
              : 'Haz click para ingresar fecha',
          }}
          errorMessage={errors.expiryDate?.message}
        />

        <CustomInput
          label="CVV"
          hasChange={!!watchedValues.cvv}
          textFieldProps={{
            fullWidth: false,
            select: false,
            ...register("cvv", validationRules.cvv),
            error: !!errors.cvv,
            onFocus: () => handleInputFocus("cvv"),
            inputProps: {
              maxLength: 3,
            },
            placeholder: '123',
            variant: 'outlined',
            type: 'password',
            helperText: focusedField === 'cvv' 
              ? '🔒 Campo activo - 3 dígitos en el reverso' 
              : 'Haz click para ingresar CVV',
          }}
          errorMessage={errors.cvv?.message}
        />

        <Button 
          type="submit" 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Procesar pago
        </Button>

        <Box sx={{ mt: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
          <strong>✅ Ahora funciona exactamente como Material-UI:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px', fontSize: '0.875rem' }}>
            <li>Usa tu código exacto: <code>...register("cardNumber", validationRules.cardNumber)</code></li>
            <li>Agrega <code>onFocus</code> después del register sin problemas</li>
            <li>El componente ahora combina automáticamente los eventos</li>
            <li>Puedes escribir normalmente y los eventos funcionan</li>
            <li>Compatible con todas las props de Material-UI TextField</li>
          </ul>
        </Box>
      </Box>
    );
  },
};
