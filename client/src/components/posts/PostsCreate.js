import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";
function PostsCreate(props) {
  return (
    <Create title="Create a post" {...props}>
      <SimpleForm>
        <TextInput source="title"></TextInput>
        <TextInput multiline source="body"></TextInput>
        <DateInput label="Publisert" source="publisert"></DateInput>
      </SimpleForm>
    </Create>
  );
}

export default PostsCreate;
