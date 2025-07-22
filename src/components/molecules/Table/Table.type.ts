export interface TableProps<T extends Record<string, any>> {
  // Core data
  columns: Array<{
    id: string;
    label: string;
    numeric?: boolean;
    width?: string | number;
    align?: 'left' | 'right' | 'center';
    sortable?: boolean;
    hidden?: boolean;
    headerClassName?: string;
    cellClassName?: string;
    renderCell?: (row: T) => React.ReactNode;
  }>;
  data: T[];
  
  // Key configuration
  idKey?: string;
  
  // State options
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  
  // Features flags
  selectable?: boolean;
  sortable?: boolean;
  pageable?: boolean;
  searchable?: boolean;
  expandable?: boolean;
  
  // Callbacks
  onRowClick?: (row: T) => void;
  onRowExpand?: (row: T) => void;
  onSelectionChange?: (selectedRows: T[]) => void;
  
  // Server-side pagination
  serverSidePagination?: boolean;
  totalCount?: number; // Total count of records from server
  onPageChange?: (page: number, rowsPerPage: number) => void; // Callback for when page changes
  onSortChange?: (orderBy: string, order: 'asc' | 'desc') => void; // Callback for when sort changes
  
  // Pagination options
  pageSize?: number;
  pageSizeOptions?: number[];
  
  // Custom renderers
  renderRowActions?: (row: T) => React.ReactNode;
  renderExpandedRow?: (row: T) => React.ReactNode;
  renderTableHeader?: () => React.ReactNode;
  
  // Styling
  containerSx?: Record<string, any>;
  tableSx?: Record<string, any>;
  headerRowSx?: Record<string, any>;
  bodyRowSx?: Record<string, any>;
  expansionPanelSx?: Record<string, any>;
  
  // Additional options
  searchPlaceholder?: string;
  stickyHeader?: boolean;
  searchDelay?: number;
  onSearchChange?: (searchTerm: string) => void;
  defaultSortColumn?: string;
  defaultSortDirection?: 'asc' | 'desc';
}
