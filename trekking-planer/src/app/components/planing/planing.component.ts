import {Component, Inject, OnInit} from '@angular/core';
import {ITrekkingEquipmentService} from "../../business-logic/trekking-equipment.service";
import {TREKKING_SERVICE_TOKEN} from "../../data-access/ai/ai-trekking-equipment.service";

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss'
})
export class PlaningComponent implements OnInit {
  constructor(@Inject(TREKKING_SERVICE_TOKEN) private readonly service: ITrekkingEquipmentService) {
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.service.generate("Prepare my equipment for a three-day trekking trip, without an overnight stay in a hut in a mountainous area in the summer."))
  }


}
