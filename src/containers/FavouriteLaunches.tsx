import { useQuery } from 'react-query';
import SpaceXApi from '../services/spaceXApi';
import { LaunchesTable, ErrorMessage } from '../components';
import { Skeleton } from '@mui/material';
import { useFavourites } from '../services/favourites';

export const FavouriteLaunches = (): JSX.Element => {
  const { isLoading, error, data } = useQuery('launches', SpaceXApi.allLaunches);
  const [favourites] = useFavourites();
  return (
    <>
      {isLoading && (
        <Skeleton animation="wave">
          <LaunchesTable />
        </Skeleton>
      )}
      {error && <ErrorMessage message={error as string} />}
      {!isLoading && !error && data && <LaunchesTable rows={data.filter(({ id }) => favourites.has(id))} includeFavouriteColumn={false} />}
    </>
  );
};
