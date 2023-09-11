import React from "react";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-4 justify-between border border-black bg-white top-[90px] z-10 right-[40px]">
      <div className="flex flex-col gap-4  w-full  overflow-scroll">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>

      <button
        onClick={goToCheckoutHandler}
        className="bg-orange-600 p-2 mx-auto w-full text-white mt-4"
      >
        Go to checkout
      </button>
    </div>
  );
};

export default DropDown;
