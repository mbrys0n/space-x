import { useQuery } from 'react-query';
import SpaceXApi from '../services/spaceXApi';
import { LaunchesTable } from '../components/LaunchesTable';

export const Launches = (): JSX.Element => {
  const { isLoading, error, data } = useQuery('launches', SpaceXApi.upcomingLaunches);
  return <LaunchesTable rows={data} />;
};
