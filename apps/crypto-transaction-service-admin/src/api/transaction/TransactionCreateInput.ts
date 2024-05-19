export type TransactionCreateInput = {
  amount?: number | null;
  fromWallet?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  toWallet?: string | null;
};
