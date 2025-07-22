import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';
import CustomPagination from './CustomPagination';

/**
 * `CustomPagination` is a responsive pagination component for tables and data grids
 * that offers advanced navigation options.
 * 
 * This component provides a complete pagination solution with page number selection,
 * rows per page configuration, and direct page navigation. It's designed to work well
 * across different screen sizes with responsive layout adjustments.
 * 
 * ## Features
 * - Previous/Next page navigation
 * - Numbered page buttons with ellipsis for large ranges
 * - Rows per page selector
 * - Direct page input for quick navigation
 * - Responsive design adapting to various screen sizes
 * - Record count display
 * 
 * @component
 */
const meta: Meta<typeof CustomPagination> = {
  title: 'molecules/CustomPagination',
  component: CustomPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A responsive pagination component for tables and data grids that offers
          intuitive navigation, page size selection, and direct page access.
          
          ## When to use
          - For tables or data grids with multiple pages of content
          - When users need to configure how many items they see per page
          - When direct navigation to a specific page is beneficial
          - In responsive designs that need to work on various screen sizes
        `
      }
    }
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items across all pages'
    },
    rowsPerPage: {
      control: { type: 'number', min: 1 },
      description: 'Number of items per page'
    },
    page: {
      control: { type: 'number', min: 0 },
      description: 'Current page (zero-based index)'
    },
    onPageChange: {
      action: 'page changed',
      description: 'Callback fired when the page is changed'
    },
    onRowsPerPageChange: {
      action: 'rows per page changed',
      description: 'Callback fired when the number of rows per page is changed'
    },
    rowsPerPageOptions: {
      control: 'object',
      description: 'Options for the rows per page select'
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: '1000px', m: 2, p: 2, border: '1px solid #eee', borderRadius: '8px' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CustomPagination>;

/**
 * Interactive pagination component with full functionality.
 * This example demonstrates a controlled pagination component with state management.
 */
export const Interactive: Story = {
  render: () => {
    // Using React state for a fully interactive demo
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const count = 243; // Total number of items
    
    return (
      <CustomPagination
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(Number(event.target.value));
          setPage(0); // Reset to first page when changing rows per page
        }}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A fully interactive example where you can change pages, adjust rows per page, and enter specific page numbers.'
      }
    }
  }
};

/**
 * Default pagination with standard configuration.
 */
export const Default: Story = {
  args: {
    count: 100,
    page: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25, 50]
  },
  parameters: {
    docs: {
      description: {
        story: 'Default pagination configuration with 100 items, 10 items per page, starting on the first page.'
      }
    }
  }
};

/**
 * Pagination with a small number of items, showing fewer page buttons.
 */
export const FewItems: Story = {
  args: {
    count: 20,
    page: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only a few items, demonstrating how it appears with a small number of pages.'
      }
    }
  }
};

/**
 * Pagination with a large number of items, showing ellipsis for page ranges.
 */
export const ManyItems: Story = {
  args: {
    count: 1000,
    page: 5,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many items, showing how ellipsis are used to indicate large page ranges.'
      }
    }
  }
};

/**
 * Pagination showing the middle of a large set, with ellipsis on both sides.
 */
export const MiddlePage: Story = {
  args: {
    count: 500,
    page: 25,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination focused on a middle page, showing ellipsis on both sides of the current page range.'
      }
    }
  }
};

/**
 * Pagination showing the last page of a set.
 */
export const LastPage: Story = {
  args: {
    count: 100,
    page: 9,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the last page of a set, demonstrating the UI state at the end of a list.'
      }
    }
  }
};

/**
 * Custom rows per page options.
 */
export const CustomRowsPerPageOptions: Story = {
  args: {
    count: 200,
    page: 0,
    rowsPerPage: 15,
    rowsPerPageOptions: [15, 30, 50, 100]
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom rows per page options (15, 30, 50, 100 instead of the default).'
      }
    }
  }
};

/**
 * Mobile view simulation.
 * This story demonstrates how the pagination looks on small screens.
 */
export const MobileView: Story = {
  args: {
    count: 100,
    page: 2,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25]
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Demonstrates the responsive behavior of the pagination component on mobile screens.'
      }
    }
  }
};
