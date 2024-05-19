import * as graphql from "@nestjs/graphql";
import { DAppInteractionResolverBase } from "./base/dAppInteraction.resolver.base";
import { DAppInteraction } from "./base/DAppInteraction";
import { DAppInteractionService } from "./dAppInteraction.service";

@graphql.Resolver(() => DAppInteraction)
export class DAppInteractionResolver extends DAppInteractionResolverBase {
  constructor(protected readonly service: DAppInteractionService) {
    super(service);
  }
}
