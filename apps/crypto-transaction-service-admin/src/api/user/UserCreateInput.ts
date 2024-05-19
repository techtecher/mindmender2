import { DAppInteractionCreateNestedManyWithoutUsersInput } from "./DAppInteractionCreateNestedManyWithoutUsersInput";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  dAppInteractions?: DAppInteractionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  isVerified?: boolean | null;
  password?: string | null;
  username?: string | null;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
