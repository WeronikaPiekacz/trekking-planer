import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {AiTrekkingEquipmentService, TREKKING_EQUIPMENT_SERVICE_TOKEN} from "./ai-trekking-equipment.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [{
    provide: TREKKING_EQUIPMENT_SERVICE_TOKEN,
    useClass: AiTrekkingEquipmentService
  }],
})
export class AiModule {
}
