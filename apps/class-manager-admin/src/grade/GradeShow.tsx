import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { GRADEDITEM_TITLE_FIELD } from "../gradedItem/GradedItemTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const GradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="GradedItemId"
          source="gradeditem.id"
          reference="GradedItem"
        >
          <TextField source={GRADEDITEM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Score" source="score" />
        <ReferenceField label="StudentId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
