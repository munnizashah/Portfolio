import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[black] rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Munniza Shah</h2>
                <p>Front-End Developer</p>
                <p>Reach out to me!</p>
              </div>

              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/munniza-shah-4324b0233/"
                    >
                      <FaLinkedinIn style={{ fill: "white" }} />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link target="_blank" href="https://github.com/munnizashah">
                      <FaGithub style={{ fill: "white" }} />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="mailto: shahmunniza@gmail.com">
                      <AiOutlineMail style={{ fill: "white" }} />
                    </Link>
                  </div>
                  {/* <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill style={{ fill: "white" }} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://formsubmit.co/shahmunniza@gmail.com"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="thename" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="hidden"
                      name="_subject"
                      value="Du har fått ett mail via din portfolio"
                      required
                    />

                    <input
                      type="text"
                      name="name"
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    />

                    {/* <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="name"
                      required
                    /> */}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="number" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300  text-black"
                    />

                    {/* <input
                      className="border-2 rounded-lg p-3 flex border-gray-300  text-black"
                      type="number"
                    /> */}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300  text-black"
                  />

                  {/* <input
                    className="border-2 rounded-lg p-3 flex border-gray-300  text-black"
                    type="email"
                    required
                  /> */}
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300  text-black"
                  />

                  {/* <input
                    id="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300  text-black"
                    type="text"
                  /> */}
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="theMessage"
                    id="message"
                    className="border-2 rounded-lg p-3 border-gray-300  text-black"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <button
                  // disabled={loading}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#main" scroll={false}>
            <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
