import React from "react";
import Image from "../Image";
import Bg from "../../assets/Bg (2).png";
import { CiPlay1 } from "react-icons/ci";

const MyClient = () => {
  return (
    <>
      <div className="bg-bg1Color py-[100px]">
        <div className="max-w-mContainer m-auto ">
          <h2 className="text-[20px] text-center font-medium text-white">
            Trusted by World’s Awesome Clients
          </h2>
          <div className="flex flex-col lg:flex-row px-10 shadow-2xl rounded-2xl p-10 space-y-5 hover:scale-105 duration-500  md:mx-0 mt-15 gap-10 items-center justify-center">
            <div className="lg:w-[50%] w-full m,t-5 lg:mt-0 relative">
              <Image imgSrc={Bg} />
              <h2 className="p-10 rounded-full bg-gray-300 absolute top-[50%] left-4"></h2>
              <CiPlay1 className="text-white absolute top-[65%] left-11 stroke-3 text-2xl"/>
            </div>
            <div className="lg:w-[65%] w-full  ">
              <h2 className="text-[16px] text-white mt-5 lg:mt-0 font-normal">
                “Their expertise and commitment to excellence are truly
                commendable. We highly Recommend Themes Park to anyone seeking
                top-notch service and outstanding results. Thank you for a job
                well done”
              </h2>
              <h2 className="mt-15 text-[16px] text-white ">Charles EusaTech </h2>
              <h2 className=" text-white">Lead @ Officer</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClient;
