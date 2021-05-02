import React, { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostList from "./components/posts/PostsList";
import PostCreate from "./components/posts/PostsCreate";
import PostEdit from "./components/posts/PostsEdit";
import "./App.css";

function App() {
  const adminUser = {
    email: "admin@a",
    password: "admin@a",
  };

  const normalUser = {
    email: "normal@user.com",
    password: "user",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details does not match");
    }
  };

  const Logout = ({ Login, error }) => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <Admin dataProvider={restProvider("http://localhost:3000")}>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
          <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
          ></Resource>
        </Admin>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
