import {Inject, Injectable} from "@angular/core";
import {ITrekkingEquipmentService, TrekkingEquipment} from "./trekking-equipment.service";
import {TREKKING_EQUIPMENT_SERVICE_TOKEN} from "../data-access/ai/ai-trekking-equipment.service";
import {IUserTrekkingEquipmentRepository} from "./user-trekking-equipment-repository";
import {UserRequest, UserTrekkingEquipment} from "./user-trekking-equipment";
import {
  USER_TREKKING_EQUIPMENT_REPOSITORY_TOKEN
} from "../data-access/firebase/user-trekking-equipment-repository-impl";

@Injectable({providedIn: 'root'})
export class TrekkingService {
  constructor(@Inject(TREKKING_EQUIPMENT_SERVICE_TOKEN) private readonly equipmentService: ITrekkingEquipmentService,
              @Inject(USER_TREKKING_EQUIPMENT_REPOSITORY_TOKEN) private readonly repository: IUserTrekkingEquipmentRepository) {

  }

  public generate(data: UserRequest) {
    return this.equipmentService.generate(`Prepare my equipment for a ${data.period} trekking trip. I will feed myself by ${data.food}. I will stay in a ${data.accommodation}. My trip will take place in the  ${data.place} during ${data.season}`)
  }

  public async save(userId: string, userRequest: UserRequest, equipment: TrekkingEquipment) {
    await this.repository.save({userId: userId, userRequest: userRequest, equipment: equipment.equipment})
  }

  public getByUserId(userId: string): Promise<UserTrekkingEquipment[]> {
    return this.repository.findByUserId(userId);
  }
}
