import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "./Header";

const Register = () => {
  return (
    <>
      <div className="container-register">
        <Navbar />
        <div className="wrapper-register">
          <form action="" className="form-register">
            <Header title="Register" description="Isi form untuk mendaftar akun" />
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="name">Email</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="name">Password</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="name">Confirm Password</label>
              <input type="text" />
            </div>
            <button>Register</button>
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
