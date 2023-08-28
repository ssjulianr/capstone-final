import React, {useState} from "react";
import MenuIcon from './menu.png';
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from '../images/mosaic.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=> state.user)
  console.log(userData)
  const dispatch = useDispatch()
  const handleShowMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logout Successful!")
  }

  return (
    <div>
      <div class="header">
        <div class="navcontainer">
          <div class="navbar">
            <div class="logo">
            <Link to="/">
                <img src={logo} />
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
                  {/* <Link to="/"><img src="imgs/mm.jpg"></img></Link> */}
                </li>
              </ul>
            </nav>
            <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? <img src={userData.image} className="h-full w-full"/> : <HiOutlineUserCircle />}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-red py-2 shadow drop-shadow-md flex flex-col">
                {/* <Link to={"/Login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link> */}
                {
                  userData.image ? <p className="cursor-pointer text-red px-2 bg-red-500" onClick={handleLogout}>Logout</p> : <Link to ={"Login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
                }
              </div>
            )}
          </div>
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
