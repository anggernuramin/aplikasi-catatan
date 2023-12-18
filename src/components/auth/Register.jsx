import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import { useInput } from "../../hooks/useInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ActionPassword from "./ActionPassword";

const Register = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const onShowHandlerPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  function userRegister(event) {
    event.preventDefault(); // Fix the typo here
    alert("okey");
    console.log("name", name);
  }

  return (
    <>
      <div className="container-register">
        <Navbar />
        <div className="wrapper-register">
          <form onSubmit={userRegister} act className="form-register">
            <Header
              title="Register"
              description="Isi form untuk mendaftar akun"
            />
            <div className="input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={setName}
                value={name}
              />
            </div>
            <div className="input">
              <label htmlFor="emal">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={setEmail}
                value={email}
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div className="input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  onChange={setPassword}
                  value={password}
                />
                <ActionPassword
                  showPassword={showPassword}
                  onShowHandlerPassword={onShowHandlerPassword}
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={setConfirmPassword}
                  value={confirmPassword}
                />
                <ActionPassword
                  showPassword={showPassword}
                  onShowHandlerPassword={onShowHandlerPassword}
                />
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
          <p className="keterangan-register">
            sudah punya akun?{""} <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
