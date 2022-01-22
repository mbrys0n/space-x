import { LaunchSummaryDto } from 'models/launch';
import { UPCOMING_LAUNCHES_ENDPOINT } from '../constants/endpoints';
import Api from './api';

const SpaceXApi = {
  upcomingLaunches: async (): Promise<LaunchSummaryDto[]> => {
    const launches: LaunchSummaryDto[] = (await Api.get(UPCOMING_LAUNCHES_ENDPOINT)) as LaunchSummaryDto[];
    return launches || [];
  },
};

export default SpaceXApi;
