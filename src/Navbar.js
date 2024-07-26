import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
function Navbar() {
  return (
    <div>
      <ul className="list">
        <li className="li1 ">
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">contact</Link>
        </li>
        <li>
          <Link to="/Product">product</Link>
        </li>
        <li>
          <Link to="/Login">login</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
