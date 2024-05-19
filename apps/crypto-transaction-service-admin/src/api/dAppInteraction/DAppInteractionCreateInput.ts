import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DAppInteractionCreateInput = {
  action?: string | null;
  details?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
