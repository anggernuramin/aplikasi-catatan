import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getAccessToken } from "../utils/local-data";

const AuthprivateRoute = (Component) => {
  return () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!getAccessToken()) {
        navigate("/login");
      }
    }, []);

    return <Component />;
  };
};

AuthprivateRoute.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default AuthprivateRoute;
