import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  courseId?: CourseListRelationFilter;
  firstName?: StringNullableFilter;
  grades?: GradeWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
