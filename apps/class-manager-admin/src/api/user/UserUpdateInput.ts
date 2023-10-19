import { CourseUpdateManyWithoutUsersInput } from "./CourseUpdateManyWithoutUsersInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  courseId?: CourseUpdateManyWithoutUsersInput;
  firstName?: string | null;
  grades?: GradeWhereUniqueInput | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
