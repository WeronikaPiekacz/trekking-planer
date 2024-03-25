interface ITrekkingEquipmentService {
  generate(prompt: string): Promise<TrekkingEquipment>
}

type TrekkingItem = {
  readonly name: string,
  readonly type: string,
  readonly features: string[]
  readonly temperatureRating?: string
}

type TrekkingEquipment = {
  readonly equipment: TrekkingItem[];
}

export {ITrekkingEquipmentService, TrekkingEquipment, TrekkingItem}

