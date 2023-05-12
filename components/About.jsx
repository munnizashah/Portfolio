import React from "react";
import Image from "next/image";
import Moni from "../public/assets/other/moni.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="py-2 text-gray-300">
            Ut enim ad minim veniam,. quis nostrud exercitation ullamco laboris
            nisi ut ali.quip .ex ea .com.modo c.o.n.sequat. Duis. aute irure
            dolor in reprehenderit in voluptate vel.it esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
          <p className="py-2 text-gray-300">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-[240px] h-auto m-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300">
          <Image
            className="rounded-xl"
            src={Moni}
            width="200"
            height="64"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
