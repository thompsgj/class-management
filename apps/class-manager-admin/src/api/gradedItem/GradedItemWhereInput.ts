import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GradedItemWhereInput = {
  activityType?: "Attendance" | "Assignment" | "Activity" | "Project" | "Exam";
  deadline?: DateTimeNullableFilter;
  grades?: GradeWhereUniqueInput;
  id?: StringFilter;
  maximum?: DecimalNullableFilter;
  name?: StringNullableFilter;
};
