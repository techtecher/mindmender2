import { DAppInteractionListRelationFilter } from "../dAppInteraction/DAppInteractionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  dAppInteractions?: DAppInteractionListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  isVerified?: BooleanNullableFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
  wallets?: WalletListRelationFilter;
};
