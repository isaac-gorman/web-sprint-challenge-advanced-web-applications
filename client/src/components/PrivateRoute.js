import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Random, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Random {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
