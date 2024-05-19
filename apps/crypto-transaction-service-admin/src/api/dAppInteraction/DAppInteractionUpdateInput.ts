import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DAppInteractionUpdateInput = {
  action?: string | null;
  details?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
