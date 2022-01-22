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
  includeFavouriteColumn?: boolean;
}

export const LaunchesTable = ({ rows, includeFavouriteColumn = true }: LaunchesTableProps): JSX.Element => {
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
  return rows && rows?.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mission</TableCell>
            <TableCell align="right">Date (UTC)</TableCell>
            <TableCell align="right">LaunchPad</TableCell>
            {includeFavouriteColumn && <TableCell align="right">Favourite</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ name, date_utc, launchpad, id }) => (
            <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{date_utc}</TableCell>
              <TableCell align="right">{launchpad}</TableCell>
              {includeFavouriteColumn && (
                <TableCell align="right">
                  <FavouriteButton onClick={toggleFavourite(id)} isFavourite={favourites.has(id)} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <div>No Launches</div>
  );
};
