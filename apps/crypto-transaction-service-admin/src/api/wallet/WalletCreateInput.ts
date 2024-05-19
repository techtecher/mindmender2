import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  address?: string | null;
  user?: UserWhereUniqueInput | null;
};
