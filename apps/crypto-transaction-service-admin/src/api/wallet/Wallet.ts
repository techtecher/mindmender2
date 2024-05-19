import { User } from "../user/User";

export type Wallet = {
  address: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
