import { TrekkingItem } from "./trekking-item";
import { SurveyResponse } from "../components/survey/survey.component";

interface ITrekkingEquipmentService {
  generate(prompt: string): Promise<TrekkingEquipment>
}

type TrekkingEquipment = {
  readonly equipment: TrekkingItem[];
}

type QueryHistory = {
  readonly response: TrekkingEquipment;
  readonly prompt: SurveyResponse;
}

export {ITrekkingEquipmentService, TrekkingEquipment, TrekkingItem, QueryHistory}

