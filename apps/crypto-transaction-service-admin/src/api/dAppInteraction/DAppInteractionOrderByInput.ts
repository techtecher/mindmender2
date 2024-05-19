import { SortOrder } from "../../util/SortOrder";

export type DAppInteractionOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
