import React from 'react';
import App from './App';
import { renderWithReactQueryRouter } from 'utils/test-utils';
import { screen } from '@testing-library/react';

describe('App routing and navigation', () => {
  it('should render Upcoming launches page as default', () => {
    renderWithReactQueryRouter(<App />, ['/']);
    const pageHeading = screen.getByRole('heading', {
      name: /Launches/i,
    });
    expect(pageHeading).toBeInTheDocument();
  });

  it('should render favourites page when clicked', () => {
    renderWithReactQueryRouter(<App />, ['/']);
    screen
      .getByRole('button', {
        name: /Favourites/i,
      })
      .click();

    const pageHeading = screen.getByRole('heading', {
      name: /Favourite Launches/i,
    });
    expect(pageHeading).toBeInTheDocument();
  });

  it('should render Countdown page when clicked', () => {
    renderWithReactQueryRouter(<App />, ['/']);
    screen
      .getByRole('button', {
        name: /Countdown/i,
      })
      .click();
    const pageHeading = screen.getByRole('heading', {
      name: /Countdown/i,
    });
    expect(pageHeading).toBeInTheDocument();
    renderWithReactQueryRouter(<App />, ['/']);
  });

  it('should render default page when navigated away from and back again', () => {
    renderWithReactQueryRouter(<App />, ['/']);
    screen
      .getByRole('button', {
        name: /Countdown/i,
      })
      .click();
    screen
      .getByRole('button', {
        name: /Upcoming Launches/i,
      })
      .click();

    const pageHeading = screen.getByRole('heading', {
      name: /Launches/i,
    });
    expect(pageHeading).toBeInTheDocument();
  });
});
