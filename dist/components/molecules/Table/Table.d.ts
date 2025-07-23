import { default as React } from 'react';
import { TableProps } from './Table.type';

declare const Table: <T extends Record<string, any>>({ columns, data, idKey, loading, error, emptyMessage, selectable, sortable, pageable, searchable, expandable, onRowClick, onRowExpand, onSelectionChange, serverSidePagination, totalCount, onPageChange, onSortChange, pageSize, pageSizeOptions, renderRowActions, renderExpandedRow, renderTableHeader, containerSx, tableSx, headerRowSx, bodyRowSx, expansionPanelSx, searchPlaceholder, stickyHeader, searchDelay, onSearchChange, defaultSortColumn, defaultSortDirection }: TableProps<T>) => React.ReactElement;
export default Table;
//# sourceMappingURL=Table.d.ts.map