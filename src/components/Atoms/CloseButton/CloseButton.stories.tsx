import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';

const meta: Meta<typeof CloseButton> = {
  title: 'Atoms/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error'],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    disabled: {
      control: 'boolean',
    },
    ariaLabel: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal con controles
export const Default: Story = {
  args: {
    size: 'medium',
    color: 'default',
    variant: 'text',
    disabled: false,
    ariaLabel: 'Close',
  },
};

// Story mostrando todas las variantes
export const AllVariants: Story = {
  render: () => {
    const colors = ['default', 'primary', 'secondary', 'error'] as const;
    const variants = ['text', 'outlined', 'contained'] as const;
    const sizes = ['small', 'medium', 'large'] as const;
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Por color y variante */}
        <div>
          <h3 style={{ marginBottom: '16px' }}>Colores y Variantes</h3>
          <div style={{ display: 'flex', gap: '24px' }}>
            {variants.map(variant => (
              <div key={variant}>
                <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 'bold' }}>
                  {variant}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {colors.map(color => (
                    <CloseButton
                      key={`${color}-${variant}`}
                      color={color}
                      variant={variant}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Por tamaño */}
        <div>
          <h3 style={{ marginBottom: '16px' }}>Tamaños</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {sizes.map(size => (
              <CloseButton
                key={size}
                size={size}
                variant="contained"
                color="primary"
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
        
        {/* Estados disabled */}
        <div>
          <h3 style={{ marginBottom: '16px' }}>Estados Disabled</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            <CloseButton variant="text" disabled onClick={() => {}} />
            <CloseButton variant="outlined" disabled onClick={() => {}} />
            <CloseButton variant="contained" disabled onClick={() => {}} />
          </div>
        </div>
      </div>
    );
  },
};