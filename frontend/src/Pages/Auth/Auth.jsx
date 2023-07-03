import React from "react";
import { useLocation } from "react-router-dom";
import Signin from "../../Components/Register/Signin";
import Signup from "../../Components/Register/Singup";
import "./Auth.css" 

const Auth = () => {
  const location=useLocation();
  return (
    <div>
     
        <div class="flex items-center justify-center h-[100vh]">
          <div className="relative mr-10 hidden lg:block">
            <div className=" h-[35.3rem] w-[23rem]">
            <div className="bg-gradient-to-br from-purple-400 to-indigo-500 h-full w-full flex flex-col justify-center items-center p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to VSocial!</h1>
          <p className="text-lg text-center text-white">
                Connect, Share, and Explore with our vibrant community.
                Stay connected with friends, discover new interests,
                and express yourself in a fun and engaging way.
                Join us on this exciting journey of connection and discovery.
                Start exploring and creating meaningful connections today!
          </p>
          </div>

            </div>
            
          </div>

          <div className="form md:w-[35vw] lg:w-[22vw]">

            {location.pathname === "/login" ? <Signin/> :  <Signup/>}
           
          </div>
        </div>
      </div>
    
  );
};

export default Auth;

// https://res.cloudinary.com/dnbw04gbs/image/upload/v1679490221/screenshot4_hb7xtr.png
//
// 
// 