import { useRef, useState } from "react";
import DekoorLogo from "../assets/Dekoor-Logo.png";
import { Cart, MenuLeft } from "../assets/Icons";
import "../styles/header.scss";

const Header = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const toggleMenu = () => {
    const navEl = document.getElementById("navEl");
    if (isActiveNav) {
      console.log("inactive");
      navEl.classList.remove("active");
      setIsActiveNav((prev) => !prev);
    } else {
      console.log("active");
      navEl.classList.add("active");
      setIsActiveNav((prev) => !prev);
    }
  };

  return (
    <div className="header">
      <a href="/" className="header-logo">
        <img src={DekoorLogo} alt="Dekoor" />
      </a>
      <nav className="nav-link">
        <ul id="navEl">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Furniture</a>
          </li>
          <li>
            <a href="">Partnership</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-action">
        <a className="sign-up-btn">Sign Up</a>
        <div className="cart">
          <Cart />
        </div>
      </div>
      <button className="menu" onClick={toggleMenu}>
        <MenuLeft />
      </button>
    </div>
  );
};

export default Header;
