import type { Meta, StoryObj } from '@storybook/react';
import BalanceBanner from './BalanceBanner';
import { Box, Paper, Typography } from '@mui/material';

const meta = {
  title: 'Molecules/BalanceBanner',
  component: BalanceBanner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A banner component that displays wallet balance with a link to the balance page. Commonly used in headers, sidebars, and user dashboards.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    balance: {
      description: 'Balance object containing amount and commerce information',
      control: 'object',
      table: {
        type: { 
          summary: 'balanceI',
          detail: `{
  monto_actual: number;
  comercio_id: number;
  comercio_id_t1paginas: string;
  credito: boolean;
}`
        },
      },
    },
    BALLANCE_PATH: {
      description: 'URL path for the balance page',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/wallet' },
      },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
} satisfies Meta<typeof BalanceBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    balance: {
      monto_actual: 1250.50,
      comercio_id: 1,
      comercio_id_t1paginas: 'DEFAULT-001',
      credito: false,
    },
    BALLANCE_PATH: '/wallet',
  },
};

// With zero balance
export const ZeroBalance: Story = {
  args: {
    balance: {
      monto_actual: 0,
      comercio_id: 1,
      comercio_id_t1paginas: 'ZERO-001',
      credito: false,
    },
    BALLANCE_PATH: '/wallet',
  },
};

// With large amount
export const LargeAmount: Story = {
  args: {
    balance: {
      monto_actual: 1234567.89,
      comercio_id: 999,
      comercio_id_t1paginas: 'LARGE-999',
      credito: true,
    },
    BALLANCE_PATH: '/wallet',
  },
};

// In context - Sidebar
export const InSidebar: Story = {
  name: 'In Sidebar Context',
  render: (args) => (
    <Paper 
      elevation={2}
      sx={{ 
        width: 280,
        height: 400,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          pb: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box 
          sx={{ 
            width: 40, 
            height: 40, 
            borderRadius: '50%', 
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          JD
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">
            John Doe
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Premium Member
          </Typography>
        </Box>
      </Box>
      
      <BalanceBanner 
        {...args} 
        BALLANCE_PATH="/wallet" 
      />
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <a href="#" style={{ padding: '8px', textDecoration: 'none', color: 'inherit' }}>Dashboard</a>
        <a href="#" style={{ padding: '8px', textDecoration: 'none', color: 'inherit' }}>Transactions</a>
        <a href="#" style={{ padding: '8px', textDecoration: 'none', color: 'inherit' }}>Settings</a>
      </nav>
    </Paper>
  ),
  args: {
    balance: {
        monto_actual: 5000,
        comercio_id: 0,
        comercio_id_t1paginas: '',
        credito: false
    },
    BALLANCE_PATH: '/wallet',
    className: 'custom-balance-banner',
  },
};

// Mobile responsive view
export const MobileView: Story = {
  name: 'Mobile Responsive',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: (args) => (
    <Box width="100%" p={2}>
      <Typography variant="body2" gutterBottom>
        Mobile View (justifyContent: space-between)
      </Typography>
      <BalanceBanner 
        {...args} 
        BALLANCE_PATH="/wallet" 
      />
    </Box>
  ),
  args: {
    balance: {
        monto_actual: 5000,
        comercio_id: 0,
        comercio_id_t1paginas: '',
        credito: false
    },
    BALLANCE_PATH: '/wallet',
    className: 'custom-balance-banner',
  },
};

// Integration example
export const RealWorldExample: Story = {
  name: 'Real World Example',
  render: (args) => (
    <Box>
      <Paper 
        elevation={0}
        sx={{ 
          p: 3,
          backgroundColor: 'grey.50',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Account Overview
        </Typography>
        <Box display="flex" gap={3} flexWrap="wrap" mt={2}>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Available Balance
            </Typography>
            <BalanceBanner 
             {...args} 
              BALLANCE_PATH="/wallet" 
            />
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Total Earnings
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              $ 12,340
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Pending
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              $ 890
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  ),
   args: {
    balance: {
        monto_actual: 5000,
        comercio_id: 0,
        comercio_id_t1paginas: '',
        credito: false
    },
    BALLANCE_PATH: '/wallet',
    className: 'custom-balance-banner',
  },
};