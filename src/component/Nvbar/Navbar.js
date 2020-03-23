import React from "react";
import logo from "../../images/logo2.png";
import "./navbar.css";
import DrawerButton from "../SideDrawer/DrawerButton";
const Navbar = props => (
  <header className="navbar" style={{ position: "fixed" }}>
    <nav className="navbar-navigation">
      <div className="not-visibal-button">
        <DrawerButton click={props.DrawerClickHandler} />
      </div>
      <div className="navbar-logo">
        <a href="..">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="navbar-items">
        <ul className="nav-menu">
          <li className="menu-active">
            <a href="..">ACCUEIL </a>
          </li>
          <li>
            <a href="..">À PROPOS </a>
          </li>
          <li>
            <a href="..">ÉVÈNEMENTS PROCHE </a>
          </li>
          <li>
            <a href="..">ORGANISATEUR </a>
          </li>
          <li>
            <a href="..">GALLERIE </a>
          </li>
          <li>
            <a href="..">ÉVÈNEMENT </a>
          </li>
          <li>
            <a href="..">CONTACT </a>
          </li>
          <li>
            <a href="..">BLOG </a>
          </li>
          <li className="connexion">
            <a href="..">CONNEXION </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Navbar;
