import { DAppInteraction } from "../dAppInteraction/DAppInteraction";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  dAppInteractions?: Array<DAppInteraction>;
  email: string | null;
  id: string;
  isVerified: boolean | null;
  password: string | null;
  updatedAt: Date;
  username: string | null;
  wallets?: Array<Wallet>;
};
