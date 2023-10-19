import { GradedItem as TGradedItem } from "../api/gradedItem/GradedItem";

export const GRADEDITEM_TITLE_FIELD = "name";

export const GradedItemTitle = (record: TGradedItem): string => {
  return record.name?.toString() || String(record.id);
};
