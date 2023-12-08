import React from "react";

const Navbar = () => {
  return (
    <div className=" max-w-[1200px]   w-full m-auto">
        <div className="flex justify-between mt-4 items-center">
           <h1 className=" font-normal text-[30px]">
              Viss Fashions
           </h1>
           <div className="flex font-normal justify-between font-sans text-lg w-[400px]">
              <div className=""> About </div>
              <div className=""> Clothing </div>
              <div className=""> Accesssories </div>
              <div className=""> Services</div>
           </div>
          <div className="flex justify-between w-[190px] font-normal text-md font-sans">
               <span className="p-2 px-4">Log in</span>
               <span className=" text-white p-2 rounded-[20px] px-6 bg-[#E87A14]">Sign up</span>
          </div>

        </div>
    </div>
  )
};

export default Navbar;