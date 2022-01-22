import React from 'react';
import Page from '../components/Page';
import { FavouriteLaunches } from '../containers/FavouriteLaunches';

export const FavouritesPage = (): JSX.Element => {
  return (
    <Page heading={'Favourite Launches'}>
      <FavouriteLaunches />
    </Page>
  );
};
