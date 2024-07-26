import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="ima">
      <Link to="/Product">
        <img src="./download.jpeg" className="img1" />
      </Link>

      <Link to="/Product">
        <img src="./d1.jpeg" className="img1" />
      </Link>

      <Link to="/Product">
        <img src="./d2.jpeg" className="img1" />
      </Link>

      <Link to="/Product">
        <img src="./d4.jpeg" className="img1" />
      </Link>

      <Link to="/Product">
        <img src="./d5.jpeg" className="img1" />
      </Link>

      <Link to="/Product">
        <img src="./d6.jpeg" className="img1" />
      </Link>
    </div>
  );
}
export default Home;
