import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CourseUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
