import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const jwt = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, '$1');

  return jwt ? element : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
