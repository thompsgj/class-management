import { Grade } from "../grade/Grade";
import { Decimal } from "decimal.js";

export type GradedItem = {
  activityType?:
    | "Attendance"
    | "Assignment"
    | "Activity"
    | "Project"
    | "Exam"
    | null;
  createdAt: Date;
  deadline: Date | null;
  grades?: Grade | null;
  id: string;
  maximum: Decimal | null;
  name: string | null;
  updatedAt: Date;
};
