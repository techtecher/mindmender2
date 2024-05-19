import { User } from "../user/User";

export type DAppInteraction = {
  action: string | null;
  createdAt: Date;
  details: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
