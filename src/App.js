import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Login, { NewUser, User } from "./Login";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="NewUser" element={<NewUser />} />
          <Route path="User" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
