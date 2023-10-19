import { GradedItemWhereUniqueInput } from "../gradedItem/GradedItemWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GradeUpdateInput = {
  assignmentId?: GradedItemWhereUniqueInput | null;
  score?: Decimal | null;
  studentId?: UserWhereUniqueInput | null;
};
