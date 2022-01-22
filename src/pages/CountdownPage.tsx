import React from 'react';
import Page from '../components/Page';
import { Countdown } from '../containers/Countdown';
import { SocialMediaShare } from '../components/SocialMediaShare';

export const CountdownPage = (): JSX.Element => {
  return (
    <Page heading={'Countdown'}>
      <Countdown />
      <SocialMediaShare shareUrl={'some url'} title={'Next SpaceX countdown'} />
    </Page>
  );
};
