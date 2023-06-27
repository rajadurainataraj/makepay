import { useState } from "react";
import "./App.css";
import { AuthRoutes } from "./pages/Auth/AuthRoutes";

function App() {
  const host = window.location.host.split(".");

console.log(host,"test new one")

   console.log(host,"new test")

  if (host.length <= 3 && host[0] === "accounts") {
    return <AuthRoutes />;
  }
  return (
    <>
      <AuthRoutes />
    </>
  );
}

export default App;
