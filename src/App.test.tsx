import React from 'react';
import App from './App';
import { renderWithReactQueryRouter } from 'utils/test-utils';

test('should render Friends page as default', () => {
  // Arrange
  renderWithReactQueryRouter(<App />, ['/']);

});

test('should render About page when clicked', () => {
  // Arrange
  renderWithReactQueryRouter(<App />, ['/']);

});

test('should render Friends page when clicking away and back again', () => {
  // Arrange
  renderWithReactQueryRouter(<App />, ['/']);

});
