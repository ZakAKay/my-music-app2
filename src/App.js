import React from "react";
import AppBar from "./Components/AppBar";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div>
      <AppBar />
      <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Dashboard />
    </div>
  );
}