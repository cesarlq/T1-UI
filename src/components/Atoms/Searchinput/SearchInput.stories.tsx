import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SearchInput from './SearchInput';
import { Box } from '@mui/material';

// Define el meta para el componente
const meta = {
  title: 'atoms/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized search input field with an icon and clean, minimal styling.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onClickButton: { action: 'buttonClicked' }
  },
  // Decorador para dar espacio alrededor del componente
  decorators: [
    (Story) => (
      <Box sx={{ padding: 4, width: '400px', maxWidth: '100%' }}>
        <Story />
      </Box>
    )
  ]
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic search input with default placeholder
export const Default: Story = {
  args: {}
};

// With default value
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Product ABC123'
  }
};

// With custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    textFieldProps: {
      placeholder: 'Search products...'
    }
  }
};

// With events
export const WithEvents: Story = {
  args: {
    onChange: ()=>{},
    onClickButton: ()=>{}
  }
};

// Focused state
export const Focused: Story = {
  render: () => {
    // We need to use useEffect to focus the input after render
    React.useEffect(() => {
      const input = document.querySelector('input');
      if (input) {
        input.focus();
      }
    }, []);
    
    return <SearchInput />;
  }
};

// With long default value
export const WithLongDefaultValue: Story = {
  args: {
    defaultValue: 'This is a very long search query that should show ellipsis when it exceeds the container width'
  }
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    textFieldProps: {
      style: {
        borderRadius: '4px',
        borderColor: '#6a1b9a',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    }
  }
};

// Mobile version
export const MobileVersion: Story = {
  decorators: [
    (Story) => (
      <Box sx={{ padding: 2, width: '320px', maxWidth: '100%' }}>
        <Story />
      </Box>
    )
  ],
  args: {
    textFieldProps: {
      placeholder: 'Search...'
    }
  }
};