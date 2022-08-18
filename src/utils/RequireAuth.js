import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authSelector } from "../features/auth/authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const { user } = useSelector(authSelector);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
