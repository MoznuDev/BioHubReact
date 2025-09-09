import React from "react";
import { FaHeart } from "react-icons/fa6";
import Image from "../Image";
import Oribi from "../../assets/Oribi.jpg"
import Furniro from "../../assets/Furniro.jpg"
import Trust from "../../assets/Trust.jpg"
import Adobe from "../../assets/Adobe.jpg"

const MyPortfolio = () => {
  return (
    <>
      <div className="bg-bgColor py-[100px]">
        <div className="max-w-mContainer m-auto text-center text-white">
          <h2 className="text--[16px] font-bold mb-3 ">My Recent Works</h2>
          <h2 className="text-3xl font-bold mb-7">Portfolio</h2>
          <p className="text-[16px] w-[50%] font-medium mb-12 m-auto ">
            Develop comprehensive content strategies tailored to your unique
            goals and target audience, ensuring that every piece of content.
          </p>
          <div className="flex flex-col md:flex-row mx-10 md:mx-0 justify-between flex-wrap gap-10">
            <div className="shadow-2xl space-y-5 hover:scale-105 duration-500 lg:w-[45%] text-center ">
                  <h2 className="text-2xl text-left">Web Development</h2>
              <p className="text-[16px] w-[70%] font-medium mb-10 text-left">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
              <div className="flex justify-between mt-5">
                <div className="flex">
                    <div className=" rounded-3xl border-2 border-cyan-100 p-2 text-[16px]">
                        <h2 >Web Design </h2>
                    </div>
                    <div className=" rounded-3xl border-2 border-cyan-100 p-2 text-[16px] ml-5">
                        <h2>Web Development</h2>
                    </div>
                </div>
                 <div className="flex items-center mt-5">
                 <FaHeart/>
                <h2>550</h2>
                </div>
                    </div>
                    <Image className={"rounded-2xl"} imgSrc={Oribi}/>
                </div>
                {/* 2 Project start  */}
            <div className="shadow-2xl p-2 space-y-5 hover:scale-105 duration-500 lg:w-[45%] ">
                  <h2 className="text-2xl text-left">Graphic Design</h2>
              <p className="text-[16px] w-[70%] font-medium mb-10 text-left">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
              <div className="flex justify-between mt-5">
                <div className="flex">
                    <div className=" rounded-3xl border-2 border-cyan-100 py-2 px-6 text-[16px]">
                        <h2 >Figma </h2>
                    </div>
                    <div className=" rounded-3xl border-2 border-cyan-100 py-2 px-6 text-[16px] ml-5">
                        <h2>Web</h2>
                    </div>
                </div>
                 <div className="flex items-center mt-5">
                 <FaHeart/>
                <h2>550</h2>
                </div>
                    </div>
                    <Image className={"rounded-2xl"} imgSrc={Furniro}/>
                </div>
                {/* 3rd Project start */}
            <div className="shadow-2xl p-2 space-y-5 hover:scale-105 duration-500 lg:w-[45%] ">
                  <h2 className="text-2xl text-left">Application Web Appp </h2>
              <p className="text-[16px] w-[70%] font-medium mb-10 text-left">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
              <div className="flex justify-between mt-5">
                <div className="flex">
                    <div className=" rounded-3xl border-2 border-cyan-100 p-2 text-[16px]">
                        <h2 >Mobile App </h2>
                    </div>
                    <div className=" rounded-3xl border-2 border-cyan-100 py-2 px-6 text-[16px] ml-5">
                        <h2>Native</h2>
                    </div>
                </div>
                 <div className="flex items-center mt-5">
                 <FaHeart/>
                <h2>550</h2>
                </div>
                    </div>
                    <Image className={"rounded-2xl"} imgSrc={Trust}/>
                </div>
                {/* 4th Project start */}
            <div className="shadow-2xl p-2 space-y-5 hover:scale-105 duration-500 lg:w-[45%] ">
                  <h2 className="text-2xl text-left">Javascript Plugin Develop</h2>
              <p className="text-[16px] w-[70%] font-medium mb-10 text-left">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
              <div className="flex justify-between mt-5">
                <div className="flex">
                    <div className=" rounded-3xl border-2 border-cyan-100 p-2 text-[16px]">
                        <h2 >Slick Slider </h2>
                    </div>
                    <div className=" rounded-3xl border-2 border-cyan-100 p-2 text-[16px] ml-5">
                        <h2>Swiper Slider</h2>
                    </div>
                </div>
                 <div className="flex items-center mt-5">
                 <FaHeart/>
                <h2>550</h2>
                </div>
                    </div>
                    <Image className={"rounded-2xl"} imgSrc={Adobe}/>
                </div>
                {/* 4th Project end */}
              </div>
            </div>
          </div>
    </>
  );
};

export default MyPortfolio;
