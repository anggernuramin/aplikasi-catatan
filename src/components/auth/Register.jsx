import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Header from "./Header";
import ActionPassword from "./ActionPassword";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { register } from "../../utils/local-data";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
import { useUser } from "../../hooks/useUser";

const Register = () => {
  const navigate = useNavigate();
  const { language } = useChangeLanguage();
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const title = language === "id" ? "Daftar" : "Register";
  const description = language === "id" ? "Isi form untuk mendaftar akun" : "Fiil in the form to register";

  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

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
      const messageWarning = language === "id" ? "Password tidak sama" : "Password no match";
      alert(messageWarning);
      event.preventDefault();
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
          <form onSubmit={userRegister} className="form-register">
            <Header title={title} description={description} />
            <div className="input">
              <label htmlFor="name">{language === "id" ? "Nama" : "Name"}</label>
              <input type="text" id="name" name="name" required onChange={setName} value={name} />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required onChange={setEmail} value={email} />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div className="input-password">
                <input id="password" type={showPassword ? "text" : "password"} name="password" required autoComplete="true" onChange={setPassword} value={password} />
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
            <button type="submit">{loading ? "Loading . . ." : title}</button>
          </form>
          <p className="keterangan-register">
            {language === "id" ? "sudah punya akun?" : "already have an account"}
            {""} <Link to="/login">{language === "id" ? "Gabung" : "Login"}</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
