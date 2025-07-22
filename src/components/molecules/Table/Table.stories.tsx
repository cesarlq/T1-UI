import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Chip} from '../../Atoms/Chip';

// Sample data for the table
const allData = [
  { id: 1, name: 'John Smith', email: 'john@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-01' },
  { id: 2, name: 'Maria Garcia', email: 'maria@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-05' },
  { id: 3, name: 'Robert Johnson', email: 'robert@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-28' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-02' },
  { id: 5, name: 'David Brown', email: 'david@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-07' },
  { id: 6, name: 'Jessica Davis', email: 'jessica@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-25' },
  { id: 7, name: 'Thomas Miller', email: 'thomas@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-03' },
  { id: 8, name: 'Jennifer Wilson', email: 'jennifer@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-06' },
  { id: 9, name: 'Michael Moore', email: 'michael@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-31' },
  { id: 10, name: 'Lisa Taylor', email: 'lisa@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-04' },
  { id: 11, name: 'William Anderson', email: 'william@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-08' },
  { id: 12, name: 'Elizabeth Thomas', email: 'elizabeth@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-27' },
  { id: 13, name: 'John Smith', email: 'john@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-01' },
  { id: 14, name: 'Maria Garcia', email: 'maria@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-05' },
  { id: 15, name: 'Robert Johnson', email: 'robert@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-28' },
  { id: 16, name: 'Sarah Williams', email: 'sarah@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-02' },
  { id: 17, name: 'David Brown', email: 'david@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-07' },
  { id: 18, name: 'Jessica Davis', email: 'jessica@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-25' },
  { id: 19, name: 'Thomas Miller', email: 'thomas@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-03' },
  { id: 20, name: 'Jennifer Wilson', email: 'jennifer@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-06' },
  { id: 21, name: 'Michael Moore', email: 'michael@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-31' },
  { id: 22, name: 'Lisa Taylor', email: 'lisa@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-04' },
  { id: 23, name: 'William Anderson', email: 'william@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-08' },
  { id: 24, name: 'Elizabeth Thomas', email: 'elizabeth@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-27' },
  { id: 25, name: 'John Smith', email: 'john@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-01' },
  { id: 26, name: 'Maria Garcia', email: 'maria@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-05' },
  { id: 27, name: 'Robert Johnson', email: 'robert@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-28' },
  { id: 28, name: 'Sarah Williams', email: 'sarah@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-02' },
  { id: 29, name: 'David Brown', email: 'david@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-07' },
  { id: 30, name: 'Jessica Davis', email: 'jessica@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-25' },
  { id: 31, name: 'Thomas Miller', email: 'thomas@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-03' },
  { id: 32, name: 'Jennifer Wilson', email: 'jennifer@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-06' },
  { id: 33, name: 'Michael Moore', email: 'michael@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-31' },
  { id: 34, name: 'Lisa Taylor', email: 'lisa@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-04' },
  { id: 35, name: 'William Anderson', email: 'william@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-08' },
  { id: 36, name: 'Elizabeth Thomas', email: 'elizabeth@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-27' },
  { id: 37, name: 'John Smith', email: 'john@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-01' },
  { id: 38, name: 'Maria Garcia', email: 'maria@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-05' },
  { id: 39, name: 'Robert Johnson', email: 'robert@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-28' },
  { id: 40, name: 'Sarah Williams', email: 'sarah@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-02' },
  { id: 41, name: 'David Brown', email: 'david@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-07' },
  { id: 42, name: 'Jessica Davis', email: 'jessica@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-25' },
  { id: 43, name: 'Thomas Miller', email: 'thomas@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-03' },
  { id: 44, name: 'Jennifer Wilson', email: 'jennifer@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-06' },
  { id: 45, name: 'Michael Moore', email: 'michael@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-31' },
  { id: 46, name: 'Lisa Taylor', email: 'lisa@example.com', status: 'active', role: 'Editor', lastLogin: '2023-04-04' },
  { id: 47, name: 'William Anderson', email: 'william@example.com', status: 'active', role: 'Admin', lastLogin: '2023-04-08' },
  { id: 48, name: 'Elizabeth Thomas', email: 'elizabeth@example.com', status: 'inactive', role: 'Viewer', lastLogin: '2023-03-27' }
];

// Column definitions
const columns = [
  { id: 'id', label: 'ID', width: '80px' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { 
    id: 'status', 
    label: 'Status',
    renderCell: (row: any) => (
      <Chip
        label={row.status} 
        color={row.status === 'active' ? 'success' : 'default'} 
        size="small"
        variant="outlined"
      />
    )
  },
  { id: 'role', label: 'Role' },
  { id: 'lastLogin', label: 'Last Login' }
];

// Sample expanded content renderer
const renderExpandedContent = (row: any) => (
  <Box sx={{ p: 2 }}>
    <Typography variant="subtitle1" gutterBottom>
      User Details
    </Typography>
    <Typography variant="body2">
      <strong>ID:</strong> {row.id}
    </Typography>
    <Typography variant="body2">
      <strong>Name:</strong> {row.name}
    </Typography>
    <Typography variant="body2">
      <strong>Email:</strong> {row.email}
    </Typography>
    <Typography variant="body2">
      <strong>Status:</strong> {row.status}
    </Typography>
    <Typography variant="body2">
      <strong>Role:</strong> {row.role}
    </Typography>
    <Typography variant="body2">
      <strong>Last Login:</strong> {row.lastLogin}
    </Typography>
  </Box>
);

// Sample row actions renderer
const renderRowActions = (row: any) => (
  <Stack direction="row" spacing={1}>
    <Tooltip title="Edit">
      <IconButton size="small">
        <EditIcon fontSize="small" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Delete">
      <IconButton size="small" color="error">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  </Stack>
);

// Sample table header renderer
const renderTableHeader = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Typography variant="h6">Users</Typography>
    <Button variant="contained" size="small">
      Add User
    </Button>
  </Stack>
);

// Define a type for our data structure
interface UserData {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  lastLogin: string;
  [key: string]: string | number; // Index signature to allow string indexing
}

const meta = {
  title: 'molecules/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible and feature-rich table component with sorting, selection, expansion, and more.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onRowClick: { action: 'rowClicked' },
    onRowExpand: { action: 'rowExpanded' },
    onSelectionChange: { action: 'selectionChanged' },
    onSearchChange: { action: 'searchChanged' }
  },
  args: {
    columns: columns,
    data: allData,
    loading: false,
    selectable: false,
    pageable: false,
    searchable: false,
    expandable: false,
    stickyHeader: true,
    idKey: 'id'
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Table
export const Basic: Story = {
  args: {
    columns: columns,
    data: allData,
    pageSizeOptions: [3, 6, 8],
  }
};

// Table with Search
export const WithSearch: Story = {
  args: {
    columns: columns,
    data: allData,
    searchable: true,
    searchPlaceholder: 'Search users...',
    pageSizeOptions: [3, 6, 8],
  }
};

// Table with Selection
export const WithSelection: Story = {
  args: {
    columns: columns,
    data: allData,
    selectable: true,
    pageSizeOptions: [3, 6, 8],
  }
};

// Table with Row Actions
export const WithRowActions: Story = {
  args: {
    columns: columns,
    data: allData,
    renderRowActions: renderRowActions,
    pageSizeOptions: [3, 6, 8],
  }
};

// Table with Expandable Rows
export const WithExpandableRows: Story = {
  args: {
    columns: columns,
    data: allData,
    expandable: true,
    renderExpandedRow: renderExpandedContent,
    pageSizeOptions: [3, 6, 8],
  }
};

// Comprehensive Table
export const ComprehensiveTable: Story = {
  args: {
    columns: columns,
    data: allData,
    selectable: true,
    searchable: true,
    expandable: true,
    renderRowActions: renderRowActions,
    renderExpandedRow: renderExpandedContent,
    renderTableHeader: renderTableHeader,
    pageSizeOptions: [3, 6, 8],
  }
};


// Loading State
export const LoadingState: Story = {
  args: {
    columns: columns,
    data: [],
    loading: true,
    pageSizeOptions: [3, 6, 8],
  }
};

// Empty State
export const EmptyState: Story = {
  args: {
    columns: columns,
    data: [],
    emptyMessage: 'No users found',
    pageSizeOptions: [3, 6, 8],
  }
};

// Error State
export const ErrorState: Story = {
  args: {
    columns: columns,
    data: [],
    error: 'Error loading users data. Please try again later.',
    pageSizeOptions: [3, 6, 8],
  }
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    columns: columns,
    data: allData,
    pageSizeOptions: [3, 6, 8],
    containerSx: {
      backgroundColor: '#f9fafc',
      padding: 2,
      borderRadius: 2
    },
    headerRowSx: {
      backgroundColor: '#f0f4ff'
    },
    bodyRowSx: {
      '&:hover': {
        backgroundColor: '#f0f7ff !important'
      }
    }
  }
};