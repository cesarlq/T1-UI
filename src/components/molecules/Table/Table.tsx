import React, { useState, useEffect } from 'react';
import {
  Box,
  Table as TableMui,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Checkbox,
  IconButton,
  Typography,
  CircularProgress,
  SelectChangeEvent
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { visuallyHidden } from '@mui/utils';
import {CustomPagination} from '../CustomPagination';
import {SearchInput} from '../../Atoms/Searchinput';
import { TableProps } from './Table.type';

type Order = 'asc' | 'desc';

const Table = <T extends Record<string, any>>({
  // Core data
  columns,
  data,
  
  // Key configuration
  idKey = 'id',
  
  // State options
  loading = false,
  error = '',
  emptyMessage = 'No data available',
  
  // Features flags
  selectable = false,
  sortable = true,
  pageable = true,
  searchable = false,
  expandable = false,
  
  // Callbacks
  onRowClick,
  onRowExpand,
  onSelectionChange,
  
  // Server-side pagination
  serverSidePagination = false,
  totalCount,
  onPageChange,
  onSortChange,
  
  // Pagination options
  pageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  
  // Custom renderers
  renderRowActions,
  renderExpandedRow,
  renderTableHeader,
  
  // Styling
  containerSx = {},
  tableSx = {},
  headerRowSx = {},
  bodyRowSx = {},
  expansionPanelSx = {},
  
  // Additional options
  searchPlaceholder = 'Search...',
  stickyHeader = true,
  searchDelay = 300,
  onSearchChange,
  defaultSortColumn = '',
  defaultSortDirection = 'asc'
}: TableProps<T>): React.ReactElement => {
  // State
  const [order, setOrder] = useState<Order>(defaultSortDirection);
  const [orderBy, setOrderBy] = useState<string>(defaultSortColumn);
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [searchInputValue, setSearchInputValue] = useState('');

  // Determine the total count of items (server or client side)
  const effectiveTotalCount = serverSidePagination ? totalCount || 0 : filteredData.length;

  // Update filtered data when data changes or search term changes (for client-side filtering)
  useEffect(() => {
    if (serverSidePagination) {
      // If server-side pagination, just use data as is
      setFilteredData(data);
      return;
    }

    if (!searchTerm) {
      setFilteredData(data);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = data.filter(row => {
      return Object.entries(row).some(([key, value]) => {
        // Only search through string or number values
        if (typeof value === 'string' || typeof value === 'number') {
          return String(value).toLowerCase().includes(searchTermLower);
        }
        return false;
      });
    });

    setFilteredData(filtered);
  }, [data, searchTerm, serverSidePagination]);

  // Handle search input with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchInputValue);
      if (onSearchChange) {
        onSearchChange(searchInputValue);
      }
    }, searchDelay);

    return () => clearTimeout(timer);
  }, [searchInputValue, searchDelay, onSearchChange]);

  // Reset pagination when data changes
  useEffect(() => {
    if (!serverSidePagination) {
      setPage(1);
    }
  }, [filteredData, serverSidePagination]);

  // Update selected rows callback
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = filteredData.filter(row => 
        selected.includes(String(row[idKey]))
      );
      onSelectionChange(selectedRows);
    }
  }, [selected, filteredData, idKey, onSelectionChange]);

  // Handle sort request
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';
    setOrder(newOrder);
    setOrderBy(property);

    // If server-side sorting, call the callback
    if (serverSidePagination && onSortChange) {
      onSortChange(property, newOrder);
    }
  };

  // Sort function for client-side sorting
  const getSorting = (order: Order, orderBy: string) => {
    return order === 'desc'
      ? (a: T, b: T) => descendingComparator(a, b, orderBy)
      : (a: T, b: T) => -descendingComparator(a, b, orderBy);
  };

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  // Handle select all click
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = filteredData.map(n => String(n[idKey]));
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // Handle row selection
  const handleRowSelect = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    
    // If server-side pagination, call the callback
    if (serverSidePagination && onPageChange) {
      onPageChange(newPage, rowsPerPage);
    }
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    const newRowsPerPage = parseInt(event.target.value.toString(), 10);
    setRowsPerPage(newRowsPerPage);
    setPage(1); // Reset to first page when changing page size
    
    // If server-side pagination, call the callback
    if (serverSidePagination && onPageChange) {
      onPageChange(1, newRowsPerPage);
    }
  };

  // Handle row expansion
  const handleRowExpand = (id: string, row: T) => {
    setExpandedRow(expandedRow === id ? null : id);
    if (onRowExpand) {
      onRowExpand(row);
    }
  };

  // Handle row click
  const handleRowClick = (row: T) => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  // Check if row is selected
  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // Render empty state
  const renderEmptyState = () => (
    <TableRow>
      <TableCell 
        colSpan={columns.length + (selectable ? 1 : 0) + (renderRowActions ? 1 : 0) + (expandable ? 1 : 0)}
        align="center"
        sx={{ py: 5 }}
      >
        <Typography variant="body1" color="text.secondary">
          {error ? error : emptyMessage}
        </Typography>
      </TableCell>
    </TableRow>
  );

  // Render loading state
  const renderLoadingState = () => (
    <TableRow>
      <TableCell 
        colSpan={columns.length + (selectable ? 1 : 0) + (renderRowActions ? 1 : 0) + (expandable ? 1 : 0)}
        align="center"
        sx={{ py: 5 }}
      >
        <CircularProgress size={32} />
      </TableCell>
    </TableRow>
  );

  // Apply sorting and pagination for client-side mode
  const visibleRows = React.useMemo(() => {
    if (serverSidePagination) {
      // For server-side, just return data as is, as it's already paginated
      return data;
    } else {
      // For client-side, handle sorting and pagination
      if (orderBy && sortable) {
        return [...filteredData].sort(getSorting(order, orderBy)).slice(
          (page - 1) * rowsPerPage,
          (page - 1) * rowsPerPage + rowsPerPage,
        );
      } else {
        return filteredData.slice(
          (page - 1) * rowsPerPage,
          (page - 1) * rowsPerPage + rowsPerPage,
        );
      }
    }
  }, [filteredData, order, orderBy, page, rowsPerPage, sortable, serverSidePagination, data]);

  // Get visible columns (non-hidden)
  const visibleColumns = columns.filter(column => !column.hidden);

  return (
    <Box 
      sx={{ 
        width: '100%',
        position: 'relative',
        zIndex: 1, // Establecer z-index base
        ...containerSx 
      }}
    >
      {/* TableMui header area */}
      {(searchable || renderTableHeader) && (
        <Box sx={{ 
          mb: 2, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          position: 'relative',
          zIndex: 2, // Z-index más alto para el header
        }}>
          {renderTableHeader ? (
            renderTableHeader()
          ) : (
            <Box />
          )}
          
          {searchable && (
            <SearchInput 
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder={searchPlaceholder}
              textFieldProps={{ sx: { width: '30rem' } }}
            />
          )}
        </Box>
      )}

      {/* Main table */}
      <TableContainer 
        component={Paper} 
        sx={{ 
            maxHeight: {
              xs: 'calc(100vh - 300px)', // Responsivo basado en viewport
              sm: 'calc(100vh - 250px)',
              md: stickyHeader ? 600 : undefined
            },
            overflow: 'auto', // Cambiado de 'hidden' a 'auto'
            overflowX: 'auto', // Asegurar scroll horizontal en móvil
            position: 'relative',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            // Mejoras para el scroll en dispositivos táctiles
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(0,0,0,0.05)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.3)',
              }
            },
            ...containerSx // Mantener las props personalizadas
          }}
      >
        <TableMui 
          sx={{ 
            minWidth: {
              xs: 500, // Ancho mínimo más pequeño para móvil
              sm: 650,
              md: 750
            },
            ...tableSx 
          }} 

          aria-labelledby="tableTitle"
          size="medium"
          stickyHeader={stickyHeader}
        >
          <TableHead>
            <TableRow sx={{ ...headerRowSx }}>
              {/* Selection checkbox column */}
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < filteredData.length}
                    checked={filteredData.length > 0 && selected.length === filteredData.length}
                    onChange={handleSelectAllClick}
                    inputProps={{ 'aria-label': 'select all' }}
                  />
                </TableCell>
              )}
              
              {/* Expansion column */}
              {expandable && (
                <TableCell width="50px" />
              )}
              
              {/* Data columns */}
              {visibleColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || (column.numeric ? 'right' : 'left')}
                  sortDirection={orderBy === column.id ? order : false}
                  width={column.width}
                  className={column.headerClassName}
                  sx={{ fontWeight: 600 }}
                >
                  {column.sortable !== false && sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                      {orderBy === column.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
              
              {/* Actions column */}
              {renderRowActions && (
                <TableCell align="right" width="100px">
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              renderLoadingState()
            ) : visibleRows.length === 0 ? (
              renderEmptyState()
            ) : (
              visibleRows.map((row, index) => {
                const rowId = String(row[idKey]);
                const isItemSelected = isSelected(rowId);
                const isExpanded = expandedRow === rowId;
                const labelId = `table-checkbox-${index}`;

                return (
                  <React.Fragment key={rowId}>
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                      sx={{ 
                        cursor: onRowClick ? 'pointer' : 'default',
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        },
                        ...bodyRowSx
                      }}
                      onClick={() => onRowClick && handleRowClick(row)}
                    >
                      {/* Selection checkbox */}
                      {selectable && (
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={(event) => {
                              event.stopPropagation();
                              handleRowSelect(rowId);
                            }}
                          />
                        </TableCell>
                      )}
                      
                      {/* Expansion control */}
                      {expandable && (
                        <TableCell>
                          <IconButton 
                            size="small"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleRowExpand(rowId, row);
                            }}
                            sx={{
                              transform: isExpanded ? 'rotate(90deg)' : 'none',
                              transition: 'transform 0.2s'
                            }}
                          >
                            <KeyboardArrowRightIcon />
                          </IconButton>
                        </TableCell>
                      )}
                      
                      {/* Data cells */}
                      {visibleColumns.map((column) => {
                        const cellValue = row[column.id];
                        
                        return (
                          <TableCell 
                            key={column.id} 
                            align={column.align || (column.numeric ? 'right' : 'left')}
                            className={column.cellClassName}
                          >
                            {column.renderCell ? column.renderCell(row) : cellValue}
                          </TableCell>
                        );
                      })}
                      
                      {/* Actions cell */}
                      {renderRowActions && (
                        <TableCell align="right">
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {renderRowActions(row)}
                          </Box>
                        </TableCell>
                      )}
                    </TableRow>
                    
                    {/* Expanded content */}
                    {expandable && renderExpandedRow && isExpanded && (
                      <TableRow>
                        <TableCell 
                          colSpan={columns.length + (selectable ? 1 : 0) + (renderRowActions ? 1 : 0) + (expandable ? 1 : 0)}
                          sx={{ 
                            py: 2, 
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                            ...expansionPanelSx
                          }}
                        >
                          {renderExpandedRow(row)}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </TableBody>
        </TableMui>
      </TableContainer>
      
      {/* Pagination */}
      {pageable && (
        <CustomPagination
          count={effectiveTotalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={pageSizeOptions}
        />
      )}
    </Box>
  );
};

export default Table;