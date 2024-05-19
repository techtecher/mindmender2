export type Transaction = {
  amount: number | null;
  createdAt: Date;
  fromWallet: string | null;
  id: string;
  status: string | null;
  timestamp: Date | null;
  toWallet: string | null;
  updatedAt: Date;
};
