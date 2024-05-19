import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DAppInteractionServiceBase } from "./base/dAppInteraction.service.base";

@Injectable()
export class DAppInteractionService extends DAppInteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
