import { DAppInteractionUpdateManyWithoutUsersInput } from "./DAppInteractionUpdateManyWithoutUsersInput";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  dAppInteractions?: DAppInteractionUpdateManyWithoutUsersInput;
  email?: string | null;
  isVerified?: boolean | null;
  password?: string | null;
  username?: string | null;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
