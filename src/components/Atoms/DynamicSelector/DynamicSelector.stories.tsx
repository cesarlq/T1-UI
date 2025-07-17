// src/components/molecules/DynamicSelector/DynamicSelector.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DynamicSelector from './DynamicSelector';
import { DynamicSelectorI, DynamicSelectorItemI } from './DynamicSelector.types';
// Iconos de ejemplo para opciones con extraData
import { 
  Circle, 
  Square, 
  Triangle, 
  Star, 
  Heart,
  User,
  Building,
  MapPin,
  Calendar,
  Clock,
  Bell,
  Shield,
  Zap,
  Sun,
  Moon,
  Cloud,
  Droplet
} from 'lucide-react';

// Componente wrapper para manejar estado
const DynamicSelectorWrapper = (props: DynamicSelectorI) => {
  const [value, setValue] = useState<string | number | string[] | number[]>(
    props.value || (props.multiple ? [] : '')
  );

  const handleChange = (newValue: string | number | string[] | number[]) => {
    setValue(newValue);
    props.onChange(newValue);
  };

  const handleClear = () => {
    setValue(props.multiple ? [] : '');
    props.onClear();
  };

  return (
    <DynamicSelector
      {...props}
      value={value}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};

// Datos de ejemplo
const simpleOptions: DynamicSelectorItemI[] = [
  { label: 'Opción 1', value: 'option1' },
  { label: 'Opción 2', value: 'option2' },
  { label: 'Opción 3', value: 'option3' },
  { label: 'Opción 4', value: 'option4' },
  { label: 'Opción 5', value: 'option5' }
];

const numericOptions: DynamicSelectorItemI[] = [
  { label: '10 items', value: 10 },
  { label: '25 items', value: 25 },
  { label: '50 items', value: 50 },
  { label: '100 items', value: 100 },
  { label: 'Todos', value: -1 }
];

const categoriesOptions: DynamicSelectorItemI[] = [
  { 
    label: 'Electrónica', 
    value: 'electronics',
    extraData: <Circle className="w-4 h-4 mr-2 text-blue-500" />
  },
  { 
    label: 'Ropa y Accesorios', 
    value: 'clothing',
    extraData: <Square className="w-4 h-4 mr-2 text-purple-500" />
  },
  { 
    label: 'Hogar y Jardín', 
    value: 'home',
    extraData: <Triangle className="w-4 h-4 mr-2 text-green-500" />
  },
  { 
    label: 'Deportes', 
    value: 'sports',
    extraData: <Star className="w-4 h-4 mr-2 text-orange-500" />
  },
  { 
    label: 'Salud y Belleza', 
    value: 'health',
    extraData: <Heart className="w-4 h-4 mr-2 text-red-500" />
  }
];

const statusOptions: DynamicSelectorItemI[] = [
  {
    label: 'Activo',
    value: 'active',
    extraData: <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
  },
  {
    label: 'Inactivo',
    value: 'inactive',
    extraData: <span className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
  },
  {
    label: 'Pendiente',
    value: 'pending',
    extraData: <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
  },
  {
    label: 'Bloqueado',
    value: 'blocked',
    extraData: <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
  }
];

const priorityOptions: DynamicSelectorItemI[] = [
  {
    label: 'Crítica',
    value: 'critical',
    extraData: (
      <div className="flex items-center mr-2">
        <Zap className="w-4 h-4 text-red-600" />
        <span className="text-xs font-bold text-red-600 ml-1">P0</span>
      </div>
    )
  },
  {
    label: 'Alta',
    value: 'high',
    extraData: (
      <div className="flex items-center mr-2">
        <Bell className="w-4 h-4 text-orange-600" />
        <span className="text-xs font-bold text-orange-600 ml-1">P1</span>
      </div>
    )
  },
  {
    label: 'Media',
    value: 'medium',
    extraData: (
      <div className="flex items-center mr-2">
        <Shield className="w-4 h-4 text-yellow-600" />
        <span className="text-xs font-bold text-yellow-600 ml-1">P2</span>
      </div>
    )
  },
  {
    label: 'Baja',
    value: 'low',
    extraData: (
      <div className="flex items-center mr-2">
        <Calendar className="w-4 h-4 text-blue-600" />
        <span className="text-xs font-bold text-blue-600 ml-1">P3</span>
      </div>
    )
  }
];

const locationOptions: DynamicSelectorItemI[] = [
  {
    label: 'Ciudad de México',
    value: 'cdmx',
    extraData: (
      <div className="flex flex-col mr-3">
        <MapPin className="w-4 h-4 text-gray-600" />
        <span className="text-xs text-gray-500">Centro</span>
      </div>
    )
  },
  {
    label: 'Guadalajara',
    value: 'gdl',
    extraData: (
      <div className="flex flex-col mr-3">
        <MapPin className="w-4 h-4 text-gray-600" />
        <span className="text-xs text-gray-500">Occidente</span>
      </div>
    )
  },
  {
    label: 'Monterrey',
    value: 'mty',
    extraData: (
      <div className="flex flex-col mr-3">
        <MapPin className="w-4 h-4 text-gray-600" />
        <span className="text-xs text-gray-500">Norte</span>
      </div>
    )
  }
];

// Meta configuración
const meta: Meta<typeof DynamicSelector> = {
  title: 'atoms/DynamicSelector',
  component: DynamicSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
DynamicSelector es un componente selector personalizable que soporta selección única y múltiple con Radio buttons o Checkboxes.

### Características principales:
- 🎯 **Selección única o múltiple**: Configurable con prop \`multiple\`
- 🎨 **Dos tipos de adornos**: Radio buttons o Checkboxes
- 📦 **Extra data personalizable**: Cada opción puede incluir contenido adicional
- 🔄 **Estado controlado**: Manejo completo del estado desde el padre
- ♿ **Accesible**: Soporte completo para teclado y lectores de pantalla
- 🎭 **Personalizable**: Clases CSS personalizadas para botón y opciones

### Casos de uso:
- Filtros de categorías en e-commerce
- Selectores de estado o prioridad
- Selección múltiple de características
- Dropdowns con información visual adicional
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    typeAdornment: {
      control: 'radio',
      options: ['checkbox', 'radio'],
      description: 'Tipo de control de selección',
      table: {
        type: { summary: '"checkbox" | "radio"' },
        defaultValue: { summary: 'radio' }
      }
    },
    defaultLabel: {
      control: 'text',
      description: 'Etiqueta mostrada cuando no hay selección'
    },
    options: {
      control: 'object',
      description: 'Array de opciones disponibles'
    },
    value: {
      description: 'Valor(es) seleccionado(s) actualmente'
    },
    onChange: {
      action: 'changed',
      description: 'Callback cuando cambia la selección'
    },
    onClear: {
      action: 'cleared',
      description: 'Callback cuando se limpia la selección'
    },
    multiple: {
      control: 'boolean',
      description: 'Habilita selección múltiple (solo con checkbox)'
    },
    large: {
      control: 'boolean',
      description: 'Versión grande del componente'
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el componente'
    },
    className: {
      control: 'text',
      description: 'Clase CSS para el contenedor de opciones'
    },
    classNameButton: {
      control: 'text',
      description: 'Clase CSS para el botón principal'
    }
  }
};

export default meta;
type Story = StoryObj<Meta<typeof DynamicSelector>>;

// Historia: Default (Radio)
export const Default: Story = {
  render: () => (
    <DynamicSelectorWrapper
      typeAdornment="radio"
      defaultLabel="Selecciona una opción"
      options={simpleOptions}
      onChange={()=> {}}
      onClear={()=> {}}
    />
  )
};

// Historia: Checkbox Multiple
export const CheckboxMultiple: Story = {
  render: () => (
    <DynamicSelectorWrapper
      typeAdornment="checkbox"
      defaultLabel="Selecciona opciones"
      options={simpleOptions}
      onChange={()=> {}}
      onClear={()=> {}}
      multiple={true}
    />
  )
};

// Historia: Con Extra Data (Categorías)
export const WithExtraData: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Selector de Categorías</h3>
      <DynamicSelectorWrapper
        typeAdornment="radio"
        defaultLabel="Todas las categorías"
        options={categoriesOptions}
        onChange={()=> {}}
        onClear={()=> {}}
      />
    </div>
  )
};

// Historia: Estados con Indicadores
export const StatusSelector: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Filtrar por Estado</h3>
      <DynamicSelectorWrapper
        typeAdornment="checkbox"
        defaultLabel="Todos los estados"
        options={statusOptions}
        onChange={()=> {}}
        onClear={()=> {}}
        multiple={true}
      />
    </div>
  )
};

// Historia: Selector de Prioridad
export const PrioritySelector: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Prioridad del Ticket</h3>
      <DynamicSelectorWrapper
        typeAdornment="radio"
        defaultLabel="Selecciona prioridad"
        options={priorityOptions}
        onChange={()=> {}}
        onClear={()=> {}}
      />
    </div>
  )
};

// Historia: Tamaño Grande
export const LargeSize: Story = {
  render: () => (
    <DynamicSelectorWrapper
      typeAdornment="radio"
      defaultLabel="Selecciona una opción"
      options={numericOptions}
      onChange={()=> {}}
      onClear={()=> {}}
      large={true}
    />
  )
};

// Historia: Estado Deshabilitado
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <DynamicSelectorWrapper
        typeAdornment="radio"
        defaultLabel="Selector deshabilitado"
        options={simpleOptions}
        onChange={()=> {}}
        onClear={()=> {}}
        disabled={true}
      />
      
      <DynamicSelectorWrapper
        typeAdornment="checkbox"
        defaultLabel="Multi-selector deshabilitado"
        options={simpleOptions}
        onChange={()=> {}}
        onClear={()=> {}}
        disabled={true}
        multiple={true}
        value={['option1', 'option3']}
      />
    </div>
  )
};

// Historia: Con Valor Inicial
export const WithInitialValue: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Selección única con valor inicial</h4>
        <DynamicSelectorWrapper
          typeAdornment="radio"
          defaultLabel="Selecciona una opción"
          options={categoriesOptions}
          onChange={()=> {}}
          onClear={()=> {}}
          value="electronics"
        />
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2">Selección múltiple con valores iniciales</h4>
        <DynamicSelectorWrapper
          typeAdornment="checkbox"
          defaultLabel="Selecciona opciones"
          options={statusOptions}
          onChange={()=> {}}
          onClear={()=> {}}
          multiple={true}
          value={['active', 'pending']}
        />
      </div>
    </div>
  )
};

// Historia: Opciones con Información Compleja
export const ComplexOptions: Story = {
  render: () => (
    <DynamicSelectorWrapper
      typeAdornment="checkbox"
      defaultLabel="Selecciona ubicaciones"
      options={locationOptions}
      onChange={()=> {}}
      onClear={()=> {}}
      multiple={true}
      large={true}
    />
  )
};

// Historia: Personalización con Clases CSS
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <DynamicSelectorWrapper
        typeAdornment="radio"
        defaultLabel="Selector personalizado"
        options={simpleOptions}
        onChange={()=> {}}
        onClear={()=> {}}
        className="bg-blue-50 border-2 border-blue-200 rounded-lg shadow-lg"
        classNameButton="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold"
      />
    </div>
  )
};

// Historia: Playground Interactivo
export const Playground: Story = {
  render: () => {
    const [config, setConfig] = useState({
      typeAdornment: 'radio' as 'radio' | 'checkbox',
      multiple: false,
      large: false,
      disabled: false,
      withExtraData: false
    });

    const selectedOptions = config.withExtraData ? categoriesOptions : simpleOptions;

    return (
      <div className="w-96">
        {/* Panel de Control */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-3">Configuración del Selector</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="adornment"
                checked={config.typeAdornment === 'radio'}
                onChange={() => setConfig({ ...config, typeAdornment: 'radio', multiple: false })}
              />
              <span>Radio Button</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="adornment"
                checked={config.typeAdornment === 'checkbox'}
                onChange={() => setConfig({ ...config, typeAdornment: 'checkbox' })}
              />
              <span>Checkbox</span>
            </label>
            
            {config.typeAdornment === 'checkbox' && (
              <label className="flex items-center gap-2 ml-6">
                <input
                  type="checkbox"
                  checked={config.multiple}
                  onChange={(e) => setConfig({ ...config, multiple: e.target.checked })}
                />
                <span>Selección múltiple</span>
              </label>
            )}
            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.large}
                onChange={(e) => setConfig({ ...config, large: e.target.checked })}
              />
              <span>Tamaño grande</span>
            </label>
            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.disabled}
                onChange={(e) => setConfig({ ...config, disabled: e.target.checked })}
              />
              <span>Deshabilitado</span>
            </label>
            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={config.withExtraData}
                onChange={(e) => setConfig({ ...config, withExtraData: e.target.checked })}
              />
              <span>Con datos extra</span>
            </label>
          </div>
        </div>

        {/* Componente */}
        <div>
          <h3 className="font-semibold mb-3">Resultado:</h3>
          <DynamicSelectorWrapper
            typeAdornment={config.typeAdornment}
            defaultLabel="Selecciona una opción"
            options={selectedOptions}
            onChange={()=> {}}
            onClear={()=> {}}
            multiple={config.multiple}
            large={config.large}
            disabled={config.disabled}
          />
        </div>
      </div>
    );
  }
};

// Historia: Casos de Uso Reales
export const RealUseCases: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">E-commerce: Filtro de Productos</h3>
        <div className="grid grid-cols-2 gap-4">
          <DynamicSelectorWrapper
            typeAdornment="checkbox"
            defaultLabel="Todas las categorías"
            options={categoriesOptions}
            onChange={()=> {}}
            onClear={()=> {}}
            multiple={true}
          />
          
          <DynamicSelectorWrapper
            typeAdornment="radio"
            defaultLabel="Items por página"
            options={numericOptions}
            onChange={()=> {}}
            onClear={()=> {}}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Sistema de Tickets: Filtros</h3>
        <div className="grid grid-cols-2 gap-4">
          <DynamicSelectorWrapper
            typeAdornment="checkbox"
            defaultLabel="Todos los estados"
            options={statusOptions}
            onChange={()=> {}}
            onClear={()=> {}}
            multiple={true}
          />
          
          <DynamicSelectorWrapper
            typeAdornment="radio"
            defaultLabel="Todas las prioridades"
            options={priorityOptions}
            onChange={()=> {}}
            onClear={()=> {}}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Selector de Ubicación</h3>
        <DynamicSelectorWrapper
          typeAdornment="checkbox"
          defaultLabel="Todas las ubicaciones"
          options={locationOptions}
          onChange={()=> {}}
          onClear={()=> {}}
          multiple={true}
          large={true}
        />
      </div>
    </div>
  )
};