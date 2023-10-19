import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { GradedItemTitle } from "../gradedItem/GradedItemTitle";
import { UserTitle } from "../user/UserTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="assignmentId.id"
          reference="GradedItem"
          label="GradedItemId"
        >
          <SelectInput optionText={GradedItemTitle} />
        </ReferenceInput>
        <NumberInput label="Score" source="score" />
        <ReferenceInput
          source="studentId.id"
          reference="User"
          label="StudentId"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
