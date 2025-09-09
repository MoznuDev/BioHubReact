import React from "react";

import Button from "../Button";
import { FaWhatsapp, FaFigma } from "react-icons/fa";
import { SiVimeo } from "react-icons/si";
import { IoPlayOutline } from "react-icons/io5";
import Image from "../Image";
import image from "../../assets/image.png";
import Frame56 from "../../assets/Frame 56.png";
import Frame57 from "../../assets/Frame 57.png";
import Frame58 from "../../assets/Frame 58.png";
import Frame59 from "../../assets/Frame 59.png";
import Frame60 from "../../assets/Frame 60.png";
import img from "../../assets/Img.png";
 import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const MyResume = () => {
  const icons = [FiFacebook, FiTwitter, FiInstagram, FiLinkedin];
  return (
    <>
      <div className="bg-bg1Color py-[100px]">
        <div className="max-w-mContainer m-auto px-5 md:px-0">
          {/* Top Section */}
          <div className="flex flex-col lg:w-[50%] mb-10 mx-auto text-center">
            <h2 className="text-[16px] font-medium text-white">
              <span>15+</span> YEARS OF EXPERIENCE
            </h2>
            <h2 className="text-3xl font-bold mb-7 text-white">My Resume</h2>
            <p className="text-[16px] font-medium mb-10 text-white">
              As a frontend specialist, I excel in building captivating user
              interfaces that not only look great but also provide seamless
              navigation.
            </p>
          </div>

          {/* Education + Social */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Education */}
            <div className="shadow-2xl rounded-2xl p-10 space-y-5 hover:scale-105 duration-500 text-white flex-1">
              <h2 className="text-2xl">Education</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                {/* Left Side */}
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <h2>2015 - 2019</h2>
                    <h2>4.95/5</h2>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-bold">Google Marketing Officer</h2>
                    <h2>United States California</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>2015 - 2019</h2>
                    <h2>4.95/5</h2>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-bold">BBA Major in Finance</h2>
                    <h2>United States California</h2>
                  </div>
                </div>
                {/* Right Side */}
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <h2>2014 - 2015</h2>
                    <h2>4.95/5</h2>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-bold">BS in Computer Science</h2>
                    <h2>University of USA</h2>
                  </div>
                  <div className="flex justify-between">
                    <h2>2022 - 2024</h2>
                    <h2>4.95/5</h2>
                  </div>
                  <div>
                    <h2 className="text-[20px] font-bold">BBA Major in Accounting</h2>
                    <h2>University of UK/London</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="shadow-2xl rounded-2xl p-10 space-y-5 hover:scale-105 duration-500 text-white w-full lg:w-[30%]">
              <h2 className="text-2xl font-bold">Stay With Me</h2>
              <div className="flex flex-col space-y-5 mt-10 items-center">
     <div className="flex space-x-5">
         {icons.map((Icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-full h-12 w-12 border-2 border-cyan-100 p-2"
        >
          <Icon className="text-2xl text-white" />
        </div>
      ))}
     </div>
    </div>
              <Button
                className="py-2 px-7 rounded-2xl w-[65%] mx-auto block bg-bgColor"
                text="View My Profile"
              />
            </div>
          </div>

          {/* Experience + Interview + Skills */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Experience */}
            <div className="shadow-2xl rounded-2xl p-10 space-y-5 hover:scale-105 duration-500 text-white w-full lg:w-[30%]">
              <h2 className="text-2xl font-bold mb-7">Job Experience</h2>
              <div className="flex justify-between">
                <h2>2015 - 2019</h2>
                <h2>4 years</h2>
              </div>
              <div>
                <h2 className="text-[20px] font-bold">Google Marketing Officer</h2>
                <h2>United States California</h2>
              </div>
              <div className="flex justify-between">
                <h2>2020 - 2024</h2>
                <h2>4 years</h2>
              </div>
              <div>
                <h2 className="text-[20px] font-bold">Grameenphone Engineer</h2>
                <h2>United States California</h2>
              </div>
            </div>

            {/* Interview */}
            <div className="shadow-2xl rounded-2xl p-7 space-y-5 hover:scale-105 duration-500 text-white w-full lg:w-[25%]">
              <h2 className="text-2xl mb-5 font-bold">Interview</h2>
              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-[40px] bg-green-300 rounded-md" />
                <div>
                  <h2>WhatsApp App</h2>
                  <h2>2015 - 2019</h2>
                </div>
              </div>
              {/* Vimeo */}
              <div className="flex items-center gap-4">
                <SiVimeo className="text-[40px] bg-blue-300 rounded-md" />
                <div>
                  <h2>Vimeo Develop</h2>
                  <h2>2022 - 2024</h2>
                </div>
              </div>
              {/* YouTube */}
              <div className="flex items-center gap-4">
                <IoPlayOutline className="text-[40px] bg-red-500 rounded-md" />
                <div>
                  <h2>YouTube Project</h2>
                  <h2>2022 - 2024</h2>
                </div>
              </div>
              {/* Banglalink */}
              <div className="flex items-center gap-4">
                <Image imgSrc={image} />
                <div>
                  <h2>Banglalink App</h2>
                  <h2>2022 - 2024</h2>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full lg:flex-1">
              <h2 className="text-2xl font-bold mb-7">Professional Skills</h2>
              {[
                { name: "Photoshop", value: 90 },
                { name: "Figma Design", value: 100 },
                { name: "App Development", value: 50 },
                { name: "AI Generator", value: 40 },
              ].map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <h2 className="text-[20px] font-medium">{skill.name}</h2>
                    <h2 className="text-[20px] font-medium">{skill.value}%</h2>
                  </div>
                  <progress
                    className="progress progress-info w-full"
                    value={skill.value}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Stats */}
          <div className="flex flex-col lg:flex-row gap-6 py-10">
            {/* Logos */}
            <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full lg:w-[15%]">
              <div className="flex flex-wrap justify-center gap-4">
                <Image imgSrc={Frame56} />
                <Image imgSrc={Frame57} />
                <Image imgSrc={Frame58} />
                <Image imgSrc={Frame59} />
                <Image imgSrc={Frame60} />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-between gap-4 w-full lg:w-[50%]">
              {[
                { count: "10+", label: "Complete Projects" },
                { count: "15+", label: "Happy Clients" },
                { count: "20K", label: "Real Projects" },
                { count: "55+", label: "Awesome Clients" },
                { count: "99K", label: "Pending Projects" },
                { count: "70+", label: "React Template" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="shadow-2xl rounded-2xl p-6 w-[48%] md:w-[30%] space-y-5 hover:scale-105 duration-500 text-white"
                >
                  <h2 className="text-4xl font-bold text-center">{stat.count}</h2>
                  <h2 className="text-[20px] text-center">{stat.label}</h2>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full lg:flex-1">
              <h2 className="text-4xl font-bold text-center">Let's Contact</h2>
              <Image imgSrc={img} />
              <Button
                className="w-[60%] mx-auto block hover:bg-bg1Color py-2 px-10 rounded-2xl border-indigo-500 bg-bgColor"
                text="Get In Touch"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyResume;
