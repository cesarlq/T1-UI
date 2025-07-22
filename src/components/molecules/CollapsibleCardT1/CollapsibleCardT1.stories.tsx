import type { Meta, StoryObj } from '@storybook/react';
import CollapsibleCardT1 from './CollapsibleCardT1';
import { Box, Button, Typography, Select, MenuItem, TextField } from '@mui/material';


const meta = {
  title: 'molecules/CollapsibleCardT1',
  component: CollapsibleCardT1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable card component with collapsible content section and responsive design.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed in the card header.'
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'If true, the collapsible content will be hidden by default.'
    },
    hideCollapseButton: {
      control: 'boolean',
      description: 'If true, the collapse button will be hidden.'
    },
    loading: {
      control: 'boolean',
      description: 'If true, displays a loading state.'
    }
  },
  args: { 
    title: 'Card Title',
    defaultCollapsed: false,
    hideCollapseButton: false,
    loading: false
  }
} satisfies Meta<typeof CollapsibleCardT1>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card with just title
export const Basic: Story = {
  args: {
    title: 'Basic Card',
    bodyContent: (
      <Typography variant="body1">
        This is a basic card with just a title and some body content.
      </Typography>
    )
  }
};

// Card with header, body and collapsible content
export const WithCollapsibleContent: Story = {
  args: {
    title: 'Sales Overview',
    headerContent: (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Select
          defaultValue="weekly"
          size="small"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </Select>
      </Box>
    ),
    bodyContent: (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {[1, 2, 3, 4].map((item) => (
          <Box
            key={item}
            sx={{
              p: 2,
              borderRadius: 1,
              bgcolor: '#f5f5f5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' }
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              ${(Math.random() * 1000).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Metric {item}
            </Typography>
          </Box>
        ))}
      </Box>
    ),
    collapseContent: (
      <Box
        sx={{
          height: 300,
          bgcolor: '#f9f9f9',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Chart or detailed content would go here
        </Typography>
      </Box>
    ),
    footerContent: (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="outlined" size="small">
          View Full Report
        </Button>
      </Box>
    )
  }
};

// Card with custom styling
export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled Card',
    headerContent: (
      <TextField 
        placeholder="Search..." 
        size="small" 
        variant="outlined"
      />
    ),
    bodyContent: (
      <Typography variant="body1">
        This card has custom styling applied to different sections.
      </Typography>
    ),
    collapseContent: (
      <Box sx={{ p: 2, bgcolor: '#f0f7ff', borderRadius: 2 }}>
        <Typography variant="body2">
          This is the collapsible content with custom background.
        </Typography>
      </Box>
    ),
    cardSx: {
      borderRadius: 4,
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      background: 'linear-gradient(to right, #ffffff, #f7f9fc)'
    },
    headerSx: {
      borderBottom: '2px solid #e0e7ff',
      pb: 2
    },
    collapseButtonSx: {
      bgcolor: '#4a6bff20',
      color: '#4a6bff',
      '&:hover': {
        bgcolor: '#4a6bff30'
      }
    }
  }
};

// Card in loading state
export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    bodyContent: (
      <Typography variant="body1">
        This content would be replaced with skeletons when loading.
      </Typography>
    )
  }
};

// Default collapsed card
export const DefaultCollapsed: Story = {
  args: {
    title: 'Collapsed by Default',
    defaultCollapsed: true,
    bodyContent: (
      <Typography variant="body1">
        Main content is always visible.
      </Typography>
    ),
    collapseContent: (
      <Typography variant="body1">
        This content is hidden by default and can be shown by clicking the expand button.
      </Typography>
    )
  }
};