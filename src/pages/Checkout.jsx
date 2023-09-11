import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);
  return (
    <div className="h-full py-20 px-10 flex flex-col gap-10 items-center ">
      <div className="flex w-full max-lg:hidden xl:w-6/12 justify-between border-b-2 border-black py-4">
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <div className="flex w-full lg:hidden xl:w-6/12 justify-between border-b-2 border-black py-4">
        <h1 className="text-3xl font-bold font-poppins">Checkout</h1>
      </div>

      <div className="grid gird-cols-1 gap-10 w-full xl:w-6/12">
        {cartItems.map((cartItem) => {
          const { name, id, imageUrl, price, quantity } = cartItem;
          return (
            <div
              className="flex items-center justify-between max-md:flex-col max-lg:gap-4"
              key={id}
            >
              <img
                className="max-h-[200px] min-w-[200px] object-cover rounded-sm"
                src={imageUrl}
                alt=""
              />
              <h2 className="text-lg font-bold font-poppins">{name}</h2>
              <div className="flex items-center gap-3">
                <RxCaretLeft
                  onClick={() => removeItemToCart(cartItem)}
                  className="text-3xl cursor-pointer"
                />
                <span>{quantity}</span>
                <RxCaretRight
                  onClick={() => addItemToCart(cartItem)}
                  className="text-3xl cursor-pointer"
                />
              </div>

              <span>${price}</span>
              <p>
                <MdDelete
                  onClick={() => clearItemFromCart(cartItem)}
                  className="text-4xl cursor-pointer hover:text-orange-600"
                />
              </p>
            </div>
          );
        })}
      </div>
      <div className=" border-t-2 border-black w-full py-6 xl:w-6/12  flex justify-between items-center">
        <p className="text-3xl font-poppins font-bold">Total: ${cartTotal}</p>
        <button className="border border-orange-600 py-2 px-4 rounded-md hover:bg-orange-600 hover:text-white">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
