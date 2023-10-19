import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { GradeTitle } from "../grade/GradeTitle";

export const GradedItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="activityType"
          label="ActivityType"
          choices={[
            { label: "Attendance", value: "Attendance" },
            { label: "Assignment", value: "Assignment" },
            { label: "Activity", value: "Activity" },
            { label: "Project", value: "Project" },
            { label: "Exam", value: "Exam" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Deadline" source="deadline" />
        <ReferenceInput source="grades.id" reference="Grade" label="Grades">
          <SelectInput optionText={GradeTitle} />
        </ReferenceInput>
        <NumberInput label="MaximumPoints" source="maximum" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
