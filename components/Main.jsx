import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { useTypewriter } from 'react-simple-typewriter';


const Main = () => {

  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500">
            WELCOME TO MY PORTFOLIO
          </p>
          <h1 className="py-4 text-gray-300 flex justify-center">
            Hey! I'm{" "}
            <span className="text-[#5651e5] ml-3">
              <Typewriter 
                options={{
                  strings: ["Munniza"],
                  autoStart: true,
                  loop: true,
									delaySpeed: 1000,
                }}
              />
            </span>
          </h1>
          <h1 className="py-2 text-gray-300">A Front-End Developer</h1>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn style={{ fill: 'white' }}/>
            </div>
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub style={{ fill: 'white' }}/>
            </div>
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail style={{ fill: 'white' }}/>
            </div>
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill style={{ fill: 'white' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
