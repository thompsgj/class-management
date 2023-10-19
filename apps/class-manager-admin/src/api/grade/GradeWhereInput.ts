import { GradedItemWhereUniqueInput } from "../gradedItem/GradedItemWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GradeWhereInput = {
  assignmentId?: GradedItemWhereUniqueInput;
  id?: StringFilter;
  score?: DecimalNullableFilter;
  studentId?: UserWhereUniqueInput;
};
