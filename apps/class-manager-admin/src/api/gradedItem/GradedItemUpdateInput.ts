import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { Decimal } from "decimal.js";

export type GradedItemUpdateInput = {
  activityType?:
    | "Attendance"
    | "Assignment"
    | "Activity"
    | "Project"
    | "Exam"
    | null;
  deadline?: Date | null;
  grades?: GradeWhereUniqueInput | null;
  maximum?: Decimal | null;
  name?: string | null;
};
