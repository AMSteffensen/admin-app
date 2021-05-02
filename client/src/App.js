import React, { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/posts/PostsList";
import PostCreate from "./components/posts/PostsCreate";
import PostEdit from "./components/posts/PostsEdit";
import authProvider from "./authProvider";

import "./App.css";

function App() {
  return (
    <Admin
      dataProvider={restProvider("http://localhost:3000")}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      ></Resource>
    </Admin>
  );
}

export default App;
