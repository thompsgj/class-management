import { GradedItem } from "../gradedItem/GradedItem";
import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Grade = {
  assignmentId?: GradedItem | null;
  createdAt: Date;
  id: string;
  score: Decimal | null;
  studentId?: User | null;
  updatedAt: Date;
};
