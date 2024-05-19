import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "address";

export const WalletTitle = (record: TWallet): string => {
  return record.address?.toString() || String(record.id);
};
