import {ITrekkingEquipmentService, TrekkingEquipment} from "../../business-logic/trekking-equipment.service";
import {Injectable, InjectionToken} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
class AiTrekkingEquipmentService implements ITrekkingEquipmentService {

  constructor(private readonly httpClient: HttpClient) {
  }

  async generate(prompt: string): Promise<TrekkingEquipment> {
    console.log("Generating equipment...")
    const response = await lastValueFrom<OllamaResponse>(this.httpClient.post<OllamaResponse>(environment.apiUrl, {
      model: "llama2",
      options: {
        temperature: 0.1
      },
      messages: [
        {
          role: "user",
          content: prompt
        },
        {
          role: "assistant",
          content: environment.assistantPrompt
        }
      ],
      stream: false
    } as OllamaRequestBody));
    console.log("Equipment generated!")
    return this.extractMessage(response.message.content)
  }

  extractMessage(content: string): TrekkingEquipment {
    return JSON.parse(content.replaceAll("\n", "")) as TrekkingEquipment
  }

}

type OllamaResponse = {
  model: string,
  created_at: string,
  message: {
    role: string,
    content: string
  };
  done: boolean;
  total_duration: number,
  load_duration: number,
  prompt_eval_count: number,
  eval_count: number,
  eval_duration: number,

}

type OllamaRequestBody = {
  model: string,
  options: {
    temperature: number
  },
  messages: {
    role: string,
    content: string
  }[],
  stream: boolean
}

const TREKKING_SERVICE_TOKEN = new InjectionToken<ITrekkingEquipmentService>("TrekkingEquipmentService")

export {AiTrekkingEquipmentService, TREKKING_SERVICE_TOKEN}



