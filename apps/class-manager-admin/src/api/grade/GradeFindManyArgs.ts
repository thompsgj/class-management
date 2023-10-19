import { GradeWhereInput } from "./GradeWhereInput";
import { GradeOrderByInput } from "./GradeOrderByInput";

export type GradeFindManyArgs = {
  where?: GradeWhereInput;
  orderBy?: Array<GradeOrderByInput>;
  skip?: number;
  take?: number;
};
