import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthprivateRoute = (Component) => {
  return () => {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
      if (!user) {
        console.log("user private tidak ada", user);
        navigate("/login");
      } else {
        console.log("user private ada", user);
      }
    }, [user]);

    return <Component />;
  };
};

AuthprivateRoute.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default AuthprivateRoute;
