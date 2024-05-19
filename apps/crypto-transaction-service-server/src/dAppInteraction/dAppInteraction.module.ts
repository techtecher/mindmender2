import { Module } from "@nestjs/common";
import { DAppInteractionModuleBase } from "./base/dAppInteraction.module.base";
import { DAppInteractionService } from "./dAppInteraction.service";
import { DAppInteractionController } from "./dAppInteraction.controller";
import { DAppInteractionResolver } from "./dAppInteraction.resolver";

@Module({
  imports: [DAppInteractionModuleBase],
  controllers: [DAppInteractionController],
  providers: [DAppInteractionService, DAppInteractionResolver],
  exports: [DAppInteractionService],
})
export class DAppInteractionModule {}
