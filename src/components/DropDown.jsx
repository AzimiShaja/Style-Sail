import React from "react";

const DropDown = () => {
  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-4 justify-between border border-black bg-white top-[90px] z-10 right-[40px]">
      <div className="flex flex-col bg-red-600 w-full  overflow-scroll" />
      <button className="bg-orange-600 p-2 mx-auto w-full text-white  overflow-scroll">
        Go to checkout
      </button>
    </div>
  );
};

export default DropDown;
