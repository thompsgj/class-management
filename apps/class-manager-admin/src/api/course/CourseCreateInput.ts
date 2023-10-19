import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
