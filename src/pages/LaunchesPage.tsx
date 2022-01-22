import React from 'react';
import Page from '../components/Page';
import { UpcomingLaunches } from '../containers/UpcomingLaunches';

export const LaunchesPage = (): JSX.Element => {
  return (
    <Page heading={'Launches'}>
      <UpcomingLaunches />
    </Page>
  );
};
