import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const PrivateRoute = ({ children }: any) => {
  const { user, loadUser } = useAuth();

  const location = useLocation();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
