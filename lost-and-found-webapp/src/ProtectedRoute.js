import React from 'react';
import { Navigate } from 'react-router-dom';
import { useMsal } from "@azure/msal-react";

const ProtectedRoute = ({ children }) => {
  const { accounts } = useMsal();

  // Check if the user is authenticated
  const isAuthenticated = accounts.length > 0;

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
