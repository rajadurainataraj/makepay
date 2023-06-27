import { useState } from "react";
import "./App.css";
import { AuthRoutes } from "./pages/Auth/AuthRoutes";

function App() {
  const host = window.location.host.split(".");
<<<<<<< HEAD
console.log(host,"test new one")
=======
   console.log(host,"new test")
>>>>>>> 4a11bcc03bd38d54286280d426dd155f7814628d
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
