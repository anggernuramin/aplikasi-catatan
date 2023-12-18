import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ActionPassword = ({ showPassword, onShowHandlerPassword }) => {
  return (
    <>
      {showPassword ? (
        <FaEye className="eye-password" onClick={onShowHandlerPassword} />
      ) : (
        <FaEyeSlash className="eye-password" onClick={onShowHandlerPassword} />
      )}
    </>
  );
};

export default ActionPassword;
