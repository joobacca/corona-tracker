import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { FormEvent, useState } from 'react';
import useStore, { EncounterState } from 'src/hooks/useStore';
import { Encounter, Order } from 'src/types';
import { getLocalDateTime } from 'src/utils/format';
import { headCells } from './data';
import ExtendedTableHead from './ExtendedTableHead';

function descendingComparator(
  a: Encounter,
  b: Encounter,
  orderBy: keyof Encounter,
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: Order, orderBy: keyof Encounter) {
  return order === 'desc'
    ? (a: Encounter, b: Encounter) => descendingComparator(a, b, orderBy)
    : (a: Encounter, b: Encounter) => -descendingComparator(a, b, orderBy);
}

const DataTable = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<any>(headCells[0].id);
  const encounters = useStore((state: EncounterState) => state.encounters);
  const filteredEncounters = useStore((state) => state.filteredEncounters);

  const displayingEncounters: Encounter[] =
    (filteredEncounters ?? encounters) || [];

  const handleRequestSort = (_event: FormEvent, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }}>
        <ExtendedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {displayingEncounters
            .sort(getComparator(order, orderBy))
            .map(({ name, encounterDate, location }) => (
              <TableRow key={`${name}-${encounterDate}`}>
                <TableCell>{name}</TableCell>
                <TableCell>{getLocalDateTime(encounterDate)}</TableCell>
                <TableCell>
                  {location?.latitude !== -1
                    ? `Lat: ${location?.latitude} Lon: ${location?.longitude}`
                    : ''}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
