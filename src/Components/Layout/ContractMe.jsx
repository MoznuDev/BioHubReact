import React from "react";
import Button from "../Button";
import Image from "../Image";
import Img from "../../assets/Img.png";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa6";

const ContractMe = () => {
  return (
    <div className="bg-bg1Color py-[100px] px-5 md:px-0">
      <div className="max-w-mContainer mx-auto">
        {/* Heading */}
        <h2 className="text-[20px] text-center text-white mb-2 font-medium">
          Contact With Me
        </h2>
        <h2 className="text-3xl font-bold text-center text-white mb-5">
          Get In Touch
        </h2>
        <p className="text-[16px] text-center text-white mx-auto lg:w-[45%] mb-10">
          Contact me for frontend development work or to discuss interactive and responsive web solutions.
        </p>

        {/* Contact Form & Info */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Form */}
          <div className="w-full lg:w-2/3">
            <div className="shadow-2xl rounded-2xl p-7 space-y-5 hover:scale-105 duration-500 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Send me a message</h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-bgColor py-2 px-6 rounded-2xl w-full text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-bgColor py-2 px-6 rounded-2xl w-full text-white outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-bgColor py-2 px-6 rounded-2xl w-full text-white outline-none mt-6"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-bgColor py-2 px-6 rounded-2xl w-full text-white outline-none mt-6"
              />
              <textarea
                placeholder="Your Message"
                className="bg-bgColor py-2 px-6 rounded-2xl w-full text-white outline-none mt-6 h-32 resize-none"
              />
              <div className="flex justify-center lg:justify-start">
                <Button
                  text="Send Message"
                  className="py-2 px-7 bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-full lg:w-1/4 text-center mt-6"
                />
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-1/3">
            <div className="shadow-2xl rounded-2xl p-7 space-y-5 hover:scale-105 duration-500 text-white">
              <div className="flex justify-center lg:justify-start mb-5">
                <Image imgSrc={Img} className="w-12 h-12 mt-4" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Get Support</h2>
              <p className="text-[16px] mb-3">
                If you want to communicate live, please Skype online contact me.
              </p>
              <h2 className="mb-2">Mobile No: 015793652412</h2>
              <div className="flex items-center gap-2 mb-2">
                <MdOutlineMarkEmailRead className="text-2xl mt-4" />
                <span>Communication With Mail</span>
              </div>
              <p className="mb-3">Please submit your email and I will reply as soon as possible.</p>
              <h2 className="mb-5">Email: akjgddf@gmail.com</h2>
              <div className="flex items-center gap-2 mb-2">
                <FaRocketchat className="text-2xl mt-2" />
                <span>Want to Chat Now?</span>
              </div>
              <p className="mb-5">
                Chat with me to find out more and get expert guidance.
              </p>
              <Button
                text="Chat Now"
                className="py-2 px-7 mt-10 bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-[40%] text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractMe;