import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";

const ActionPassword = ({ showPassword, onShowHandlerPassword }) => {
  return <>{showPassword ? <FaEye className="eye-password" onClick={onShowHandlerPassword} /> : <FaEyeSlash className="eye-password" onClick={onShowHandlerPassword} />}</>;
};

ActionPassword.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  onShowHandlerPassword: PropTypes.func.isRequired,
};

export default ActionPassword;
