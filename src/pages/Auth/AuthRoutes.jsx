import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";

export function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/auth/login" replace={true} />}
        />
        <Route path="/auth/login" Component={Logout} />
      </Routes>
    </>
  );
}
