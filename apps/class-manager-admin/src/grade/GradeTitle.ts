import { Grade as TGrade } from "../api/grade/Grade";

export const GRADE_TITLE_FIELD = "id";

export const GradeTitle = (record: TGrade): string => {
  return record.id?.toString() || String(record.id);
};
