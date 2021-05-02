import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";
function PostsEdit(props) {
  return (
    <Edit title="Endre en post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id"></TextInput>
        <TextInput source="title"></TextInput>
        <TextInput multiline source="body"></TextInput>
        <DateInput label="Publisert" source="publisert"></DateInput>
      </SimpleForm>
    </Edit>
  );
}

export default PostsEdit;
