import React from "react";
import "./Login.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="lad">
      <button className="btn1">
        <img src="./user1.svg" className="user" />
        <Link to="NewUser" className="link">
          NewUser
        </Link>
      </button>
      <button className="btn2">
        <img src="./user.svg" className="user" />
        <Link to="User" className="link">
          User
        </Link>
      </button>
      <Outlet />
    </div>
  );
}

export function NewUser() {
  return (
    <>
      <h1>hai everyone</h1>
    </>
  );
}

export function User() {
  return (
    <>
      <h1>hai</h1>
    </>
  );
}

export default Login;
