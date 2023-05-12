import React from "react";
import Image from "next/image";
import todopic from "public/assets/projects/todopic.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const todoapp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/10 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todopic}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2">
          <h2 className="py-2">Todo Application</h2>
          <h3> Node JS / Express JS / Javascript / Sequelize </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A todo application built with RESTful API principles and a database
            where we call the data from our todo web application. I truly
            enjoyed working on this project even if it was tough in the
            beginning. We used Sequelize to communicate to the database and
            express.js for this process. While working on this project I
            realised that I enjoy backend as well, it was fun building both
            back- and frontend.{" "}
          </p>
          <Link
            target="_blank"
            href="https://github.com/FED24-Data-Interaction/todo-list"
          >
            <button className="px-8 py-2 mt-4">Github</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express JS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sequelize
              </p>
            </div>
          </div>
        </div>
        <Link href="/#spotify">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default todoapp;
