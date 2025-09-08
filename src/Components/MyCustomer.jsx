import React from "react";
import Image from "./Image";
import P from "../assets/P.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle5 from "../assets/Rectangle5.png";

const MyCustomer = () => {
  return (
    <>
      <div className="py-[100px] bg-bg1Color">
        <div className="max-w-mContainer m-auto text-center text-white">
          <h2 className="text--[16px] font-bold mb-3 ">See My Customers</h2>
          <h2 className="text-5xl font-bold text-center">Awesome Clients</h2>
          <p className="text-[16px] w-[50%] font-medium mb-12 m-auto mt-5">
            My awesome clients foundation in frontend development and a keen eye
            for design, I specialize in creating interactive and responsive web.
          </p>
             <div className="flex flex-col md:flex-row md:flex-wrap mx-5 md:mx-0 justify-between gap-6">
  {/* Card 1 */}
  <div className="flex justify-center md:w-[48%] w-full">
    <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full">
      <div className="flex gap-2">
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
      </div>
      <p className="text-[16px] font-medium mb-10 mt-5 text-left">
        Client feedback is a crucial aspect of any business's growth
        strategy. It offers valuable insights into customer
        satisfaction, identifies areas for improvement, and helps
        relationships.
      </p>
      <div className="flex gap-x-4 text-left">
        <Image imgSrc={Rectangle1}/>
        <div>
          <h2 className="font-semibold">Fatima Asrafy</h2>
          <h2 className="text-sm text-gray-300">Tech Lead @ Officer</h2>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex justify-center md:w-[48%] w-full">
    <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full">
      <div className="flex gap-2">
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
      </div>
      <p className="text-[16px] font-medium mb-10 mt-5 text-left ">
        Client feedback is a crucial aspect of any business's growth
        strategy. It offers valuable insights into customer
        satisfaction, identifies areas for improvement, and helps
        relationships.
      </p>
      <div className="flex gap-x-4 text-left">
        <Image imgSrc={Rectangle2}/>
        <div>
          <h2 className="font-semibold">Fatima Asrafy</h2>
          <h2 className="text-sm text-gray-300">Tech Lead @ Officer</h2>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex justify-center md:w-[48%] w-full">
    <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full">
      <div className="flex gap-2">
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
      </div>
      <p className="text-[16px] font-medium mb-10 mt-5 text-left">
        Client feedback is a crucial aspect of any business's growth
        strategy. It offers valuable insights into customer
        satisfaction, identifies areas for improvement, and helps
        relationships.
      </p>
      <div className="flex gap-x-4 text-left">
        <Image imgSrc={Rectangle3}/>
        <div>
          <h2 className="font-semibold">Fatima Asrafy</h2>
          <h2 className="text-sm text-gray-300">Tech Lead @ Officer</h2>
        </div>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex justify-center md:w-[48%] w-full">
    <div className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white w-full">
      <div className="flex gap-2">
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
        <Image imgSrc={P} />
      </div>
      <p className="text-[16px] font-medium mb-10 mt-5 text-left">
        Client feedback is a crucial aspect of any business's growth
        strategy. It offers valuable insights into customer
        satisfaction, identifies areas for improvement, and helps
        relationships.
      </p>
      <div className="flex gap-x-4 text-left">
        <Image imgSrc={Rectangle5}/>
        <div>
          <h2 className="font-semibold">Fatima Asrafy</h2>
          <h2 className="text-sm text-gray-300">Tech Lead @ Officer</h2>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default MyCustomer;
