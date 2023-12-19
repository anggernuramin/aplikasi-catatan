import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import ActionPassword from "./ActionPassword";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { register } from "../../utils/local-data";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const onShowHandlerPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onShowHandlerConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  async function userRegister(event) {
    setLoading(true);
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password no match");
      return;
    }

    const { error } = await register({ name, email, password });
    if (error) {
      setLoading(false);
    } else {
      navigate("/login");
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container-register">
        <Navbar />
        <div className="wrapper-register">
          <form onSubmit={userRegister} act className="form-register">
            <Header title="Register" description="Isi form untuk mendaftar akun" />
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required onChange={setName} value={name} />
            </div>
            <div className="input">
              <label htmlFor="emal">Email</label>
              <input type="email" id="email" name="email" required onChange={setEmail} value={email} />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div className="input-password">
                <input id="password" type={showPassword ? "text" : "password"} name="password" required autoComplete={true.toString()} onChange={setPassword} value={password} />
                <ActionPassword showPassword={showPassword} onShowHandlerPassword={onShowHandlerPassword} />
              </div>
            </div>
            <div className="input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-password">
                <input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} autoComplete="true" required name="confirmPassword" onChange={setConfirmPassword} value={confirmPassword} />
                <ActionPassword showPassword={showConfirmPassword} onShowHandlerPassword={onShowHandlerConfirmPassword} />
              </div>
            </div>
            <button type="submit">{loading ? "Loading . . ." : "Register"}</button>
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
