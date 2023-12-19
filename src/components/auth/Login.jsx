import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import ActionPassword from "./ActionPassword";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { login, putAccessToken } from "../../utils/local-data";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const onShowHandlerPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  async function userLogin(event) {
    setLoading(true);
    event.preventDefault();
    if (!password || !email) {
      setLoading(false);
      alert("Tidak Boleh Kosong");
      return;
    }
    const { error, data } = await login({ email, password });
    if (error) {
      setLoading(false);
    } else {
      putAccessToken(data.accessToken);
      setLoading(false);
      navigate("/");
    }
  }

  return (
    <div className="container-register">
      <Navbar title="Login" description="Yuk, login untuk menggunakan aplikasi." />
      <div className="wrapper-register wrapper-login">
        <form onSubmit={userLogin} action="" className="form-register">
          <Header title="Login" description="Isi form untuk mendaftar akun" />
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
          <button type="submit">{loading ? "Loading . . ." : "Login"}</button>
        </form>
        <p className="keterangan-register">
          Belum punya akun?{""} <Link to="/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
