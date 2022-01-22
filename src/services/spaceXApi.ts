import { LaunchSummaryDto, NextLaunchDto } from 'models/launch';
import { NEXT_LAUNCH_ENDPOINT, UPCOMING_LAUNCHES_ENDPOINT } from '../constants/endpoints';
import Api from './api';

const SpaceXApi = {
  upcomingLaunches: async (): Promise<LaunchSummaryDto[]> => {
    const launches: LaunchSummaryDto[] = (await Api.get(UPCOMING_LAUNCHES_ENDPOINT)) as LaunchSummaryDto[];
    return launches || [];
  },
  nextLaunch: async (): Promise<NextLaunchDto> => {
    return (await Api.get(NEXT_LAUNCH_ENDPOINT)) as NextLaunchDto;
  },
};

export default SpaceXApi;
