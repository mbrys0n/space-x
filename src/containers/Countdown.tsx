import { useQuery } from 'react-query';
import SpaceXApi from '../services/spaceXApi';
import CountdownTimer from '../components/CountdownTimer';
import { DateTime } from 'luxon';
import { Skeleton } from '@mui/material';
import { ErrorMessage } from '../components';

export const Countdown = (): JSX.Element => {
  const { isLoading, error, data } = useQuery('nextLaunch', SpaceXApi.nextLaunch);

  const parseLaunchData = ({ date_utc }: { date_utc: string }) => DateTime.fromISO(date_utc);
  return (
    <>
      {isLoading && <Skeleton animation="wave" />}
      {error && <ErrorMessage message={error as string} />}
      {!isLoading && !error && data && <CountdownTimer parsedDT={parseLaunchData(data)} />}
    </>
  );
};
