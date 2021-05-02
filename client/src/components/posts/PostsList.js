import React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
  DeleteButton,
} from "react-admin";

function PostsList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"></TextField>
        <TextField source="title"></TextField>
        <DateField source="publisert"></DateField>
        <EditButton basePath="/posts"></EditButton>
        <DeleteButton basePath="/posts"></DeleteButton>
      </Datagrid>
    </List>
  );
}

export default PostsList;
