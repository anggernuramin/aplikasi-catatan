import { useContext } from "react";
import { AuthUserContext } from "../contexts/AuthUserContext";

export const useUser = () => {
  return useContext(AuthUserContext);
};
