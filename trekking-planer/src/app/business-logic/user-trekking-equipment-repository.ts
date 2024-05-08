import {UserTrekkingEquipment} from "./user-trekking-equipment";

export interface IUserTrekkingEquipmentRepository {
  save(equipment: UserTrekkingEquipment): Promise<{ id: string }>

  findByUserId(userId: string): Promise<UserTrekkingEquipment[]>
}
