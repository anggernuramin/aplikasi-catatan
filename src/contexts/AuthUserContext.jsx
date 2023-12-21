import { createContext, useEffect, useMemo, useState } from "react";
import { getAccessToken, getUserLogged, putAccessToken } from "../utils/local-data";

export const AuthUserContext = createContext();

export const AuthUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const { data } = await getUserLogged();
    if (data) {
    console.log(user, "token ada");
      setUser(data);
    } else {
    console.log(user, "token tidak ada");
      setUser(null);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUser(data);
  };

  const initialState = useMemo(() => {
    return {
      user,
      setUser,
      onLoginSuccess,
    };
  }, [user]);

  return <AuthUserContext.Provider value={initialState}>{children}</AuthUserContext.Provider>;
};
