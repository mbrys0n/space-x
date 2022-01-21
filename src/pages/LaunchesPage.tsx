import React from 'react';
import Page from '../components/Page';
import { Launches } from '../containers/Launches';

export const LaunchesPage = (): JSX.Element => {
  return (
    <Page heading={'Launches'}>
      <Launches />
    </Page>
  );
};
