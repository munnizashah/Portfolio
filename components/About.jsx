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
            I am on my 23rd year around the sun and currently studying frontend
            development at Hyper Island.
          </p>
          <p className="py-2 text-gray-300">
            I would call myself a student of life and a creator of heart and
            love bringing value to others. Being able to create from scratch and
            watch my code become a reality is what puts a smile on my face. I
            enjoy being in an innovative and creative environment as that is
            where my potential flourishes.
          </p>
          <p className="py-2 text-gray-300">
            Take a look around my portfolio and reach out! Lets create some
            magic!{" "}
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
