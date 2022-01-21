import { LaunchSummary } from 'models/launch';
import { UPCOMING_LAUNCHES_ENDPOINT } from '../constants/endpoints';
import Api from './api';

const SpaceXApi = {
  upcomingLaunches: async (): Promise<LaunchSummary[]> => {
    const launches: LaunchSummary[] = (await Api.get(UPCOMING_LAUNCHES_ENDPOINT)) as LaunchSummary[];
    return launches || [];
  },
};

export default SpaceXApi;
