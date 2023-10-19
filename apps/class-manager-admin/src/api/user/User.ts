import { Course } from "../course/Course";
import { Grade } from "../grade/Grade";
import { JsonValue } from "type-fest";

export type User = {
  courseId?: Array<Course>;
  createdAt: Date;
  firstName: string | null;
  grades?: Grade | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
