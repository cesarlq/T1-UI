export interface TableProps<T extends Record<string, any>> {
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
    idKey?: string;
    loading?: boolean;
    error?: string;
    emptyMessage?: string;
    selectable?: boolean;
    sortable?: boolean;
    pageable?: boolean;
    searchable?: boolean;
    expandable?: boolean;
    onRowClick?: (row: T) => void;
    onRowExpand?: (row: T) => void;
    onSelectionChange?: (selectedRows: T[]) => void;
    serverSidePagination?: boolean;
    totalCount?: number;
    onPageChange?: (page: number, rowsPerPage: number) => void;
    onSortChange?: (orderBy: string, order: 'asc' | 'desc') => void;
    pageSize?: number;
    pageSizeOptions?: number[];
    renderRowActions?: (row: T) => React.ReactNode;
    renderExpandedRow?: (row: T) => React.ReactNode;
    renderTableHeader?: () => React.ReactNode;
    containerSx?: Record<string, any>;
    tableSx?: Record<string, any>;
    headerRowSx?: Record<string, any>;
    bodyRowSx?: Record<string, any>;
    expansionPanelSx?: Record<string, any>;
    searchPlaceholder?: string;
    stickyHeader?: boolean;
    searchDelay?: number;
    onSearchChange?: (searchTerm: string) => void;
    defaultSortColumn?: string;
    defaultSortDirection?: 'asc' | 'desc';
}
//# sourceMappingURL=Table.type.d.ts.map