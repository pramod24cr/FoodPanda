import { LOGO_URL } from "../utils/constants";
import logo from "../utils/assets/logo.jpg";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

   // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  // const logo = "/assets/logo.jpg";

  return (
    <header className="bg-gray-200 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 sm:p-6">
        {/* Logo */}
        <div className="w-32 sm:w-36 cursor-pointer transform transition-transform duration-200 hover:scale-105 active:scale-95">
          <Link to="/">
            <img
              className="w-32 sm:w-36 cursor-pointer"
              src={logo}
              alt="Application Logo"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        {/* <nav className="hidden sm:flex space-x-6 text-gray-700 text-base sm:text-lg">
          <Link
            className="hover:text-green-600 font-medium transition-all flex items-center space-x-1"
            to="/"
          >
            <span role="img" aria-label="home">
              🏠
            </span>
            <span>Home</span>
          </Link>
        </nav> */}

        {/* Actions: Cart, Online Status, and Login */}
        <div className="flex flex-wrap items-center space-x-4 sm:space-x-6">
          {/* Online Status */}
          <div className="text-sm sm:text-base font-medium text-gray-800">
            {onlineStatus ? (
              <span className="flex items-center space-x-1">
                <span role="img" aria-label="online">
                  🟢
                </span>
                <span>Online</span>
              </span>
            ) : (
              <span className="flex items-center space-x-1">
                <span role="img" aria-label="offline">
                  🔴
                </span>
                <span>Offline</span>
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="text-sm sm:text-base font-medium">
            <Link
              to="/cart"
              className="flex items-center hover:text-green-600 transition-all"
            >
              <span role="img" aria-label="cart">
                🛒
              </span>
              <span>Cart ({cartItems.length})</span>
            </Link>
          </div>

          {/* Login Button */}
          {/* <button
            className="bg-black text-white px-4 py-2 rounded-lg font-medium transform transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={handleLoginClick} // Navigate directly to the login page
          >
            Login
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
