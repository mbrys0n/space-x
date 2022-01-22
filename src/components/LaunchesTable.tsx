import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LaunchSummaryDto } from '../models/launch';

// Adapted from https://mui.com/components/tables/

interface LaunchesTableProps {
  rows?: LaunchSummaryDto[];
}

export const LaunchesTable = ({ rows }: LaunchesTableProps): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mission</TableCell>
            <TableCell align="right">Date (UTC)</TableCell>
            <TableCell align="right">LaunchPad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? (
            rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.date_unix}</TableCell>
                <TableCell align="right">{row.launchpad}</TableCell>
              </TableRow>
            ))
          ) : (
            <div>No data</div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
