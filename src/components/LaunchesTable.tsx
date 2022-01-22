import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LaunchSummaryDto } from '../models/launch';
import { FavouriteButton } from './FavouriteButton';
import { useFavourites } from '../services/favourites';

// Adapted from https://mui.com/components/tables/
interface LaunchesTableProps {
  rows?: LaunchSummaryDto[];
}

export const LaunchesTable = ({ rows }: LaunchesTableProps): JSX.Element => {
  const [favourites, setFavourites] = useFavourites();
  const toggleFavourite = (id: string) => (): void => {
    if (favourites.has(id)) {
      favourites.delete(id);
      setFavourites(favourites);
    } else {
      favourites.add(id);
      setFavourites(favourites);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mission</TableCell>
            <TableCell align="right">Date (UTC)</TableCell>
            <TableCell align="right">LaunchPad</TableCell>
            <TableCell align="right">Favourite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? (
            rows.map(({ name, date_unix, launchpad, id }) => (
              <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{date_unix}</TableCell>
                <TableCell align="right">{launchpad}</TableCell>
                <TableCell align="right">
                  <FavouriteButton onClick={toggleFavourite(id)} isFavourite={favourites.has(id)} />
                </TableCell>
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
