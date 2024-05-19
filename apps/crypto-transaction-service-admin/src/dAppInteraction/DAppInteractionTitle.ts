import { DAppInteraction as TDAppInteraction } from "../api/dAppInteraction/DAppInteraction";

export const DAPPINTERACTION_TITLE_FIELD = "action";

export const DAppInteractionTitle = (record: TDAppInteraction): string => {
  return record.action?.toString() || String(record.id);
};
