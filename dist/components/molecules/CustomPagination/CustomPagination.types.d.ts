import { SelectChangeEvent } from '@mui/material';
export interface CustomPaginationProps {
    count: number;
    rowsPerPage: number;
    page: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    onRowsPerPageChange: (event: SelectChangeEvent<number>) => void;
    rowsPerPageOptions?: number[];
}
//# sourceMappingURL=CustomPagination.types.d.ts.map