import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const normalUser = {
    email: "normal@user.com",
    password: "user",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const closeSidebar = () => {
    setsidebarOpen(false);
  };

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
        <div className="container">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
