import React from 'react'
import Limage from '../assests/Limage.png'
import Logo from '../assests/Logo.png'
import { FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
const Form = () => {
  return (
  <div className='w-full h-full mt-64 bg-gradient-to-r from-orange-500 to-red-700 backdrop-sepia-0'>
    <div className='flex items-center w-[800px] m-auto justify-center rounded-lg'>
        <div className='w-[1200px] flex m-auto items-center h-[900px]'>
            <div className='w-[700px] h-[660px] bg-white p-4 rounded-l-lg'>
              <div className='mb-6'>
                <div className='flex justify-center m-5'> <img className='' src={Logo} alt='logo' /> </div>
                <div className='font-bold text-center text-[25px]'> Log in or Sign up </div>
                <div className='text center text-gray-500'> Use your email or other servive to continue with us</div>
              </div>
             <div className='flex flex-col items-center'>
                <div className=' flex rounded-[20px] border-gray-500 p-[10px] border-[1px] w-[270px] text-center justify-center m-3 shadow-lg'> <FaFacebook size={20} className='text-blue-500 m-1 mr-3' />  Continue with Facebook</div>
                <div className=' flex rounded-[20px] border-gray-500 p-[10px] border-[1px] w-[270px] text-center justify-center m-3 shadow-lg'> <FcGoogle size={20} className='text-blue-500 m-1 mr-3' />  Continue with Google</div>
                <div className=' flex rounded-[20px] border-gray-500 p-[10px] border-[1px] w-[270px] text-center justify-center m-3 shadow-lg'> <FaApple size={20} className=' m-1 mr-3' />  Continue with Apple</div>
                <div className=' flex rounded-[20px] border-gray-500 p-[10px] border-[1px] w-[270px] text-center justify-center m-3 shadow-lg'> <FaTwitter size={20} className='text-blue-500 m-1 mr-3' />  Continue with Twitter</div>
                <div className=' flex rounded-[20px] border-gray-500 p-[10px] border-[1px] w-[270px] text-center justify-center m-3 shadow-lg'> <MdEmail size={20} className=' m-1 mr-3' />  Continue with Email</div>
                <div className=' flex rounded-[20px] border-gray-500 p-[10px] border-[1px] w-[270px] text-center justify-center m-3 shadow-lg'> <IoIosPhonePortrait size={20} className=' m-1 mr-3' />  Continue with Email</div>
               </div>
           </div>

            <div className=' rounded-lg'>
                <img className='rounded-r-lg h-[660px] w-[700px]' src={Limage} alt='image' />
            </div>
        </div>  
    </div>
  </div>
  )
};

export default Form;