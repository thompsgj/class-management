import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { GradedItemTitle } from "../gradedItem/GradedItemTitle";
import { UserTitle } from "../user/UserTitle";

export const GradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
