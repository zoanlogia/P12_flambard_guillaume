import logo from "@/assets/img/logo.svg";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa"; // import hamburger icon from react-icons
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false); // state to toggle the menu in small screens

  return (
    <header>
      <nav id="navbar" className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
          <h1>SportSee</h1>
        </div>

        <div onClick={() => setShow(!show)} className="menu-icon">
          <FaBars />
        </div>

        <div className={`navbar__menu ${show ? "show-menu" : ""}`}>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Profil</a>
            </li>
            <li>
              <a href="#">Réglage</a>
            </li>
            <li>
              <a href="#">Communauté</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
