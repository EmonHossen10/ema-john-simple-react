import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// step 2 {children}
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //
  const location=useLocation()
  console.log(location)

  if (loading) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} > </Navigate>;
};

export default PrivateRoutes;
