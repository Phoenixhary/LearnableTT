import React from "react";
import Figma from '../Assests/Figma.png'

const Hero = () => {
  return (
  <div className=" min-h-max w-[1300px]">
    <div className="flex mt-20 justify-around h-[500px]">
        <div className="flex flex-col items-center justify-center">
            <div className="text-[30px] text-[#44C3EBCC]"> TRENDIEST FASHION EVER </div>
            <div> When you are in doubt wear a Viss Fashions Denim </div>
            <button> Buy now </button>  
       </div>  

        <div className="max-w-[1000px] h-[900px]">
               <img className="w-[527px] h-[703px]" src={Figma} alt="img" />
        </div>

    </div>
  </div>
  )
};

export default Hero;