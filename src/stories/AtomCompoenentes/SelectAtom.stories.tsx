import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SelectAtom from '@/Components/Atoms/Select';
import { MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const meta: Meta<typeof SelectAtom> = {
  title: 'Atom/Select',
  component: SelectAtom,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      table: {
        type: { summary: 'ReactNode' },
      },
      description: 'MenuItem components to display as options',
      control: false
    },
    className: {
      control: 'text',
      description: 'Custom class name for additional styling',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select if true',
    },
    variant: {
      control: { type: 'select', options: ['outlined', 'filled', 'standard'] },
      description: 'The variant of the select field',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      description: 'The size of the select field',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel>Nombre</InputLabel>
          <SelectAtom 
            value={value}
            label="Age"
            onChange={(event) => setValue(event.target.value as string)}
            {...args}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
      </Box>
    );
  },
  args: {
    variant: 'outlined',
  },
};

export const WithoutLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <Box sx={{ minWidth: 200 }}>
        <SelectAtom 
          value={value}
          onChange={(event) => setValue(event.target.value as string)}
          displayEmpty
          {...args}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectAtom>
      </Box>
    );
  },
  args: {
    variant: 'outlined',
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth disabled>
          <InputLabel>Age</InputLabel>
          <SelectAtom 
            value={20}
            label="Age"
            {...args}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
      </Box>
    );
  },
  args: {
    variant: 'outlined',
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => {
    const [outlined, setOutlined] = useState('');
    const [filled, setFilled] = useState('');
    const [standard, setStandard] = useState('');
    
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel>Outlined</InputLabel>
          <SelectAtom 
            value={outlined}
            label="Outlined"
            variant="outlined"
            onChange={(event) => setOutlined(event.target.value as string)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Filled</InputLabel>
          <SelectAtom 
            value={filled}
            label="Filled"
            variant="filled"
            onChange={(event) => setFilled(event.target.value as string)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Standard</InputLabel>
          <SelectAtom 
            value={standard}
            label="Standard"
            variant="standard"
            onChange={(event) => setStandard(event.target.value as string)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
      </Box>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState('');
    const [medium, setMedium] = useState('');
    
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel>Small</InputLabel>
          <SelectAtom 
            value={small}
            label="Small"
            size="small"
            onChange={(event) => setSmall(event.target.value as string)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Medium</InputLabel>
          <SelectAtom 
            value={medium}
            label="Medium"
            size="medium"
            onChange={(event) => setMedium(event.target.value as string)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SelectAtom>
        </FormControl>
      </Box>
    );
  },
};
