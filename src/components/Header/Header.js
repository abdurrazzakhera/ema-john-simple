import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className='headerNav'>
        <img src={logo} alt='' />
        <div>
          <a href='/Shop'>Shop</a>
          <a href='/order'>Order Review</a>
          <a href='/manageinvetory'>Manage Inventory</a>
          <a href='/about'>About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
