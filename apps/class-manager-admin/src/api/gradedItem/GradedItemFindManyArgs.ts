import { GradedItemWhereInput } from "./GradedItemWhereInput";
import { GradedItemOrderByInput } from "./GradedItemOrderByInput";

export type GradedItemFindManyArgs = {
  where?: GradedItemWhereInput;
  orderBy?: Array<GradedItemOrderByInput>;
  skip?: number;
  take?: number;
};
