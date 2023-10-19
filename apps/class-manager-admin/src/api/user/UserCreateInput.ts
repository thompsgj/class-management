import { CourseCreateNestedManyWithoutUsersInput } from "./CourseCreateNestedManyWithoutUsersInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  courseId?: CourseCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  grades?: GradeWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
