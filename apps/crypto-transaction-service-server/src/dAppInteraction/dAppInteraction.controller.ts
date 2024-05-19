import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DAppInteractionService } from "./dAppInteraction.service";
import { DAppInteractionControllerBase } from "./base/dAppInteraction.controller.base";

@swagger.ApiTags("dAppInteractions")
@common.Controller("dAppInteractions")
export class DAppInteractionController extends DAppInteractionControllerBase {
  constructor(protected readonly service: DAppInteractionService) {
    super(service);
  }
}
