import { TrekkingItem } from "./trekking-item";

interface ITrekkingEquipmentService {
  generate(prompt: string): Promise<TrekkingEquipment>
}

type TrekkingEquipment = {
  readonly equipment: TrekkingItem[];
}

export {ITrekkingEquipmentService, TrekkingEquipment}

