import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isVerified?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
