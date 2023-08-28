import React from "react";
import MenuIcon from './menu.png';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="header">
        <div class="navcontainer">
          <div class="navbar">
            <div class="logo">
            <Link to="/">
                <img src="imgs/mm.png" width="125px" />
                </Link>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                <Link to="/finance"> Finances</Link>
                </li>
                <li>
                <Link to="/housing">Housing</Link>
                </li>
                <li>
                <Link to="/health">Health</Link>
                </li>
                <li>
                  <Link to="/"><img src="imgs/mm.jpg"></img></Link>
                </li>
              </ul>
            </nav>
            {/* cart img*/}
            {/* <a href="cart.html"><img src="images/cart.png" width="30px" height="30px"/></a> */}
            <img
              src={MenuIcon}
              onclick="menutoggle()"
              className="menu-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
