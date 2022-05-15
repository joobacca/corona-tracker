import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import type { FormEvent, FC } from 'react';
import { headCells } from './data';

type Order = 'asc' | 'desc';

interface ExtendedTableHeadProps {
  order: Order;
  orderBy: string;
  onRequestSort: (event: FormEvent, property: string) => void;
}

const ExtendedTableHead: FC<ExtendedTableHeadProps> = ({
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler = (property: string) => (event: FormEvent) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ExtendedTableHead;
