import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ActionPassword from "./ActionPassword";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const onShowHandlerPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  function userLogin(event) {
    event.preventDefault();
    if (!password || !email) {
      alert("Tidak Boleh Kosong");
      return;
    }
    console.log("name", email, password);
    // navigate("/");
  }

  return (
    <div className="container-register">
      <Navbar
        title="Login"
        description="Yuk, login untuk menggunakan aplikasi."
      />
      <div className="wrapper-register wrapper-login">
        <form onSubmit={userLogin} action="" className="form-register">
          <Header title="Login" description="Isi form untuk mendaftar akun" />
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              onChange={setEmail}
              value={email}
              id="email"
              name="email"
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <div className="input-password">
              <input
                type={showPassword ? "text" : "password"}
                required
                id="password"
                name="password"
                onChange={setPassword}
                value={password}
              />
              <ActionPassword
                showPassword={showPassword}
                onShowHandlerPassword={onShowHandlerPassword}
              />
            </div>
          </div>

          <button type="submit">Login</button>
        </form>
        <p className="keterangan-register">
          Belum punya akun?{""} <Link to="/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
