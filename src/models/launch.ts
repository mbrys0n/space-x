export interface LaunchSummaryDto {
  name: string;
  date_unix: number;
  launchpad: string;
  id: string;
  [key: string]: unknown; // Ordinarily would fully type the Dto of an api, skipping to save time for this task
}
