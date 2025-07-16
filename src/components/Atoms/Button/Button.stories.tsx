import type { Meta, StoryObj } from '@storybook/react';
import ButtonAtom from './Button'
import {ArrowForwardIos, AutoFixHighOutlined} from '@mui/icons-material';

const meta: Meta<typeof ButtonAtom> = {
  title: 'Atoms/Button',
  component: ButtonAtom,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', display: 'grid', justifyContent: 'center'}}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text or elements to display inside the button',
    },
    className: {
      control: 'text',
      description: 'Custom class name for additional styling',
    },
    onClick: {
      action: 'clicked',
      description: 'Function to call when the button is clicked',
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
      description: 'Variant of the button style',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'Color of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if true',
    },
    sx: {
      control: 'object',
      description: 'Custom styles for the button',
    },
    startIcon: {
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Icono al inicio del botón (se pasa como ReactNode)',
      control: false, // 👈 evita que Storybook intente controlar este prop
    },
    endIcon: {
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'Icono al final del botón (se pasa como ReactNode)',
      control: false, // 👈 evita que Storybook intente controlar este prop
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <h1>Principal</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
       
        
            <ButtonAtom {...args}>
                + Crear envío
            </ButtonAtom>

            <ButtonAtom {...args} disabled>
                + Crear envío
            </ButtonAtom>

            <ButtonAtom {...args} loading >
                + Crear envío
            </ButtonAtom>
      </div>

      
</div>),
  args: {
    children: 'Default',
    variant: 'contained',
    startIcon: <AutoFixHighOutlined />,
    endIcon:<ArrowForwardIos />
  },
};


export const Secondary: Story = {
    render: (args) => (<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <h1>Secundario</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
            <ButtonAtom {...args}>
                Edición masiva
            </ButtonAtom>

            <ButtonAtom {...args} disabled>
               Edición masiva
            </ButtonAtom>

            <ButtonAtom {...args} loading >
               Edición masiva
            </ButtonAtom>
      </div>

      
</div>),
  args: {
    children: 'Default',
    variant: 'outlined',
    startIcon: <AutoFixHighOutlined />,
    endIcon:<ArrowForwardIos />
  },
};

export const Linkbutton: Story = {
    render: (args) => (<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <h1>Linkbutton</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
            <ButtonAtom {...args}>
                Text Link
            </ButtonAtom>

            <ButtonAtom {...args} disabled>
                Text Link
            </ButtonAtom>

      </div>

      
</div>),
  args: {
    children: 'Default',
    variant: 'text',
    startIcon: <AutoFixHighOutlined />,
    endIcon:<ArrowForwardIos />
  },
};