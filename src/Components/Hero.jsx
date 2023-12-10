import React from "react";
import Figma from '../assests/Figma.png'

const Hero = () => {
  return (
  <div className=" min-h-max w-[1300px]">
    <div className="flex mt-20 justify-around h-[500px] m-auto w-[1200px]">
        <div className="flex flex-col justify-center items-start">
            <div className="text-[25px] text-[#44C3EBCC]"> TRENDIEST FASHION EVER </div>
            <div className="text-[42px] font-normal text "> When you are in doubt <br></br> wear a Viss Fashions <br></br> Denim </div>
            <button className="bg-[#E87A14] text-white rounded-[20px] p-3 w-32 mt-12"> Buy now </button>  
       </div>  

        <div className="max-w-[1000px] h-[900px]">
               <img className="w-[527px] h-[703px]" src={Figma} alt="img" />
        </div>

    </div>
  </div>
  )
};

export default Hero;