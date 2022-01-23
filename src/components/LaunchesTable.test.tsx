import React from 'react';
import { LaunchesTable } from './LaunchesTable';
import { fireEvent, render } from '@testing-library/react';
import { LaunchSummaryDto } from '../models/launch';

const mockData: LaunchSummaryDto[] = [
  {
    name: 'launch1',
    launchpad: 'launchpad1',
    date_utc: 'date1',
    id: 'id1',
    date_unix: 1,
  },
  {
    name: 'launch2',
    launchpad: 'launchpad2',
    date_utc: 'date2',
    id: 'id2',
    date_unix: 2,
  },
  {
    name: 'launch3',
    launchpad: 'launchpad3',
    date_utc: 'date3',
    id: 'id3',
    date_unix: 3,
  },
];

describe('Launches table', () => {
  describe('display and data render', () => {
    const displayAttributes = ['name', 'launchpad', 'date_utc'];
    it('should render all row values for rows correctly', () => {
      const result = render(<LaunchesTable rows={mockData} />);
      mockData.forEach((record) => {
        Object.entries(record).forEach(([attrib, value]) => {
          if (displayAttributes.includes(attrib)) {
            const element = result.getByText(value as string);
            expect(element).toBeInTheDocument();
          }
        });
      });
    });
  });
  describe('interactivity', () => {
    it('should add to favourites to localstorage when click favourite', async () => {
      const setItem = jest.spyOn(Storage.prototype, 'setItem');

      const result = render(<LaunchesTable rows={mockData} />);
      const favouriteButtons = await result.findAllByTestId('favourite-button');

      fireEvent.click(favouriteButtons[0]);
      fireEvent.click(favouriteButtons[2]);

      expect(favouriteButtons.length).toEqual(mockData.length);
      expect(setItem).toHaveBeenNthCalledWith(1, 'favourites', '["id1"]');
      expect(setItem).toHaveBeenNthCalledWith(2, 'favourites', '["id1","id3"]');
    });
  });
});
