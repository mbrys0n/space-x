import React from 'react';
import Page from '../components/Page';
import { Countdown } from '../containers/Countdown';
export const CountdownPage = (): JSX.Element => {
  return (
    <Page heading={'Countdown'}>
      <Countdown />
    </Page>
  );
};
