import logo from "@/assets/img/logo.svg";
import "./Navbar.scss";

/**
 * The Navbar component is a React functional component that renders a navigation bar with a logo and a
 * menu.
 * @returns The Navbar component is returning a JSX element representing a navigation bar.
 */
const Navbar = () => {
  return (
    <header>
      <nav id="navbar" className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
          <h1>SportSee</h1>
        </div>

        <div className="navbar__menu">
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
