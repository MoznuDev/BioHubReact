import React from "react";
import Button from "../Button";
import Image from "../Image";
import bg4 from "../../assets/bg4.jpg";
import { FaFacebookSquare,FaInstagram ,FaArrowDown } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import DownArrow from "../DownArrow";

const Banner = () => {
  return (
    <>
      <div className="bg-bgColor py-[150px]">
        <div className="max-w-mContainer m-auto text-center text-white">
          <div className="flex flex-col md:flex-row mx-10 md:mx-0">
            <div className="text-white space-y-4 w-full lg:w-1/2 text-left">
              <h2 className="text-[16px] font-medium ">Welcome To My World</h2>
              <h2 className="text-3xl font-bold mb-7">Hi I Am</h2>
              <h2 className="text-6xl font-bold mr-20 mb-7">
                Moznur Rahman a Developer.
              </h2>
              <p className="text-[16px] font-medium mr-10">
                I am a passionate and versatile content creator dedicated to
                crafting compelling narratives, engaging visuals, and impactful
                messages. With a keen eye for detail and a love for
                storytelling.
              </p>
              <div className=" flex pb-5">
                <div className="relative w-1/2">
                    <Button
                className={"rounded-2xl py-2 text-center border-2 border-blue-700 w-[50%] "}
                text={"Download cv"}/>
                <FaArrowDown className="absolute top-[35%] left-[41%] "/>
                </div>
              <div className=" items-center flex gap-x-7 ml-10 text-2xl">
                <FaFacebookSquare/>
                <IoLogoTwitter/>
                <TiSocialLinkedin/>
                <FaInstagram />
              </div>
              </div>
            </div>
            <div className="text-white space-y-4 w-full lg:w-1/2 text-right flex md:mt-5 ">
              <Image className={"rounded-2xl"} imgSrc={bg4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
