import { useQuery } from 'react-query';
import SpaceXApi from '../services/spaceXApi';
import { LaunchesTable, ErrorMessage } from '../components';
import { Skeleton } from '@mui/material';

export const UpcomingLaunches = (): JSX.Element => {
  const { isLoading, error, data } = useQuery('launches', SpaceXApi.upcomingLaunches);
  return (
    <>
      {isLoading && (
        <Skeleton animation="wave">
          <LaunchesTable />
        </Skeleton>
      )}
      {error && <ErrorMessage message={error as string} />}
      {!isLoading && !error && <LaunchesTable rows={data} />}
    </>
  );
};
