import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import ActionPassword from "./ActionPassword";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { login } from "../../utils/local-data";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useInput("");
  const { language } = useChangeLanguage();
  const { user, onLoginSuccess } = useUser();
  const [password, setPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = language === "id" ? "Gabung" : "Login";
  const description = language === "id" ? "Yuk, login untuk menggunakan aplikasi." : "Come on, Login to use the application";

  const onShowHandlerPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  async function userLogin(event) {
    setLoading(true);
    event.preventDefault();
    if (!password || !email) {
      const messageWarning = language === "id" ? "Tidak Boleh Kosong" : "Not Empty";
      setLoading(false);
      alert(messageWarning);
      event.preventDefault();
      return;
    }
    const { error, data } = await login({ email, password });
    if (error) {
      setLoading(false);
    } else {
      onLoginSuccess(data);
      setLoading(false);
      navigate("/");
    }
  }

  return (
    <div className="container-register">
      <Navbar />
      <div className="wrapper-register wrapper-login">
        <form onSubmit={userLogin} action="" className="form-register">
          <Header title={title} description={description} />

          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" required onChange={setEmail} value={email} id="email" name="email" />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <div className="input-password">
              <input type={showPassword ? "text" : "password"} required autoComplete="true" id="password" name="password" onChange={setPassword} value={password} />
              <ActionPassword showPassword={showPassword} onShowHandlerPassword={onShowHandlerPassword} />
            </div>
          </div>
          <button type="submit">{loading ? "Loading . . ." : title}</button>
        </form>
        <p className="keterangan-register">
          {language === "id" ? "Belun punya akun?" : "don't have an account?"} <Link to="/register">{language === "id" ? "Daftar disini" : "Register here"}</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
