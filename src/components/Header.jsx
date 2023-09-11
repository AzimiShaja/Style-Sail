import React from "react";
import { PiCrownSimpleFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signOutUser } from "../utils/firebase";
import DropDown from "./DropDown";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const handleToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="flex py-3 px-10 justify-between items-center shadow-lg">
        <div className="flex items-center  cursor-pointer">
          <Link to={"/"}>
            <PiCrownSimpleFill className="text-5xl hover:text-orange-600 duration-300 text-gray-600" />
          </Link>
        </div>
        <div className="nav-links flex gap-4 items-center">
          <Link to={"/shop"}>Shop</Link>
          {currentUser ? (
            <Link onClick={signOutHandler}>Sign Out</Link>
          ) : (
            <Link to={"/login"}>Sign in</Link>
          )}
          <div
            onClick={handleToggle}
            className="flex flex-col items-center relative cursor-pointer"
          >
            <BiShoppingBag className="text-4xl" />
            {cartItemCount > 0 && (
              <span className="absolute left-6 bg-orange-600 rounded-full text-white px-2 py-[0.4px]">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
      {isCartOpen && <DropDown />}

      <Outlet />
    </>
  );
};

export default Header;
