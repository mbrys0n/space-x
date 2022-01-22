import { LaunchSummaryDto, NextLaunchDto } from 'models/launch';
import { ALL_LAUNCHES_ENDPOINT, NEXT_LAUNCH_ENDPOINT, UPCOMING_LAUNCHES_ENDPOINT } from '../constants/endpoints';
import Api from './api';

const SpaceXApi = {
  upcomingLaunches: async (): Promise<LaunchSummaryDto[]> => {
    const launches: LaunchSummaryDto[] = (await Api.get(UPCOMING_LAUNCHES_ENDPOINT)) as LaunchSummaryDto[];
    return launches || [];
  },
  allLaunches: async (): Promise<LaunchSummaryDto[]> => {
    return (await Api.get(ALL_LAUNCHES_ENDPOINT)) as LaunchSummaryDto[];
  },
  nextLaunch: async (): Promise<NextLaunchDto> => {
    return (await Api.get(NEXT_LAUNCH_ENDPOINT)) as NextLaunchDto;
  },
};

export default SpaceXApi;
