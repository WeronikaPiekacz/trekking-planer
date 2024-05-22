import { TrekkingItem } from './trekking-item';

export type UserTrekkingEquipment = {
  userId: string;
  userRequest: UserRequest;
  equipment: Item[];
};

export type Item = {
  readonly name: string;
  readonly type?: string;
  readonly features?: string[];
  readonly brands?: string[];
  readonly weight?: string;
  readonly size?: string;
  readonly description?: string;
  readonly temperatureRating?: string;
  check?: boolean;
};

export type UserRequest = {
  period: string;
  food: string;
  accommodation: string;
  place: string;
  season: string;
};
