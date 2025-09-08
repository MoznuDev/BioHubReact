import React from "react";
import { FaHtml5, FaBootstrap,FaReact,FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

const Service = () => {
  return (
    <>
      <div className="bg-bg1Color py-[100px]">
        <div className="max-w-mContainer m-auto text-center text-white">
          <h2 className="text--[16px] font-bold mb-3 ">
            My Specializations Services
          </h2>
          <h2 className="text-3xl font-bold mb-7">What I Do</h2>
          <p className="text-[16px] w-[50%] font-medium mb-10 m-auto">
            Develop comprehensive content strategies tailored to your unique
            goals and target audience, ensuring that every piece of content.
          </p>
          <div className="flex flex-col md:flex-row mx-10 md:mx-0 justify-between flex-wrap gap-10">
            <div className="shadow-2xl p-10 space-y-5 hover:scale-105 duration-500 lg:w-[30%] text-center">
              <div className="border-cyan-100 border-2 p-10 rounded-2xl ">
                <FaHtml5 className="text-9xl m-auto " />
              </div>
              <h2 className="text-2xl">HTML</h2>
              <p className="text-[16px]font-medium m-auto">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
            </div>
            <div className="shadow-2xl p-10 space-y-5 hover:scale-105 duration-500 lg:w-[30%]">
              <div className="border-cyan-100 border-2  p-10 rounded-2xl">
                <FaBootstrap className="text-9xl m-auto" />
              </div>
              <h2 className="text-2xl">Bootstrap</h2>
              <p className="text-[16px]font-medium m-auto">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
            </div>
            <div className="shadow-2xl p-10 space-y-5 hover:scale-105 duration-500 lg:w-[30%]">
              <div className="border-cyan-100 border-2   p-10 rounded-2xl">
                <RiTailwindCssFill className="text-9xl m-auto" />
              </div>
              <h2 className="text-2xl">Tailwind</h2>
               <p className="text-[16px]font-medium m-auto">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
            </div>
            <div className="shadow-2xl p-10 space-y-5 hover:scale-105 duration-500 lg:w-[30%]">
              <div className="border-cyan-100 border-2  p-10 rounded-2xl">
                <FaReact className="text-9xl m-auto" />
              </div>
              <h2 className="text-2xl">React</h2>
               <p className="text-[16px]font-medium m-auto">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
            </div>
            <div className="shadow-2xl p-10 space-y-5 hover:scale-105 duration-500 lg:w-[30%]">
              <div className="border-cyan-100 border-2   p-10 rounded-2xl">
                <IoLogoJavascript className="text-9xl m-auto" />
              </div>
              <h2 className="text-2xl">Javascript</h2>
               <p className="text-[16px]font-medium m-auto">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
            </div>
            <div className="shadow-2xl p-10 space-y-5 hover:scale-105 duration-500 lg:w-[30%]">
              <div className="border-cyan-100 border-2  p-10 rounded-2xl">
                <FaGitSquare className="text-9xl m-auto" />
              </div>
              <h2 className="text-2xl">git</h2>
               <p className="text-[16px]font-medium m-auto">
                This is a fictional personal portfolio crafted as an example
                your actual skills, experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
