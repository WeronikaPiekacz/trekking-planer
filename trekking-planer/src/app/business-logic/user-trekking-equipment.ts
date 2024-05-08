import {TrekkingItem} from "./trekking-item";


export type UserTrekkingEquipment = {
  userId: string,
  userRequest: UserRequest
  equipment: TrekkingItem[]
};

export type UserRequest = { period: string, food: string, accommodation: string, place: string, season: string }
