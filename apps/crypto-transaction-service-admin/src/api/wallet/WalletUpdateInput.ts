import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  address?: string | null;
  user?: UserWhereUniqueInput | null;
};
