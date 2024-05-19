import { DAppInteractionWhereInput } from "./DAppInteractionWhereInput";
import { DAppInteractionOrderByInput } from "./DAppInteractionOrderByInput";

export type DAppInteractionFindManyArgs = {
  where?: DAppInteractionWhereInput;
  orderBy?: Array<DAppInteractionOrderByInput>;
  skip?: number;
  take?: number;
};
