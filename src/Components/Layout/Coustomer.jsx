import React from "react";
import Image from "../Image";
import photo from "../../assets/photo.png";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";
import Rectangle5 from "../../assets/Rectangle5.png";

const Customer = () => {
  const customerData = [
    { avatar: Rectangle1, name: "Fatima Asrafy", role: "Tech Lead @ Officer" },
    { avatar: Rectangle2, name: "John Doe", role: "Project Manager" },
    { avatar: Rectangle3, name: "Sarah Khan", role: "UI/UX Designer" },
    { avatar: Rectangle5, name: "David Miller", role: "Frontend Developer" },
  ];

  return (
    <div className="py-[100px] bg-bg1Color">
      <div className="max-w-mContainer mx-auto text-center text-white px-5 md:px-0">
        <h2 className="text-[16px] font-bold mb-3">See My Customers</h2>
        <h2 className="text-5xl font-bold mb-5">Awesome Clients</h2>
        <p className="text-[16px] w-full md:w-2/4 mx-auto font-medium mb-12">
          My awesome clients foundation in frontend development and a keen eye
          for design. I specialize in creating interactive and responsive web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customerData.map((customer, idx) => (
            <div
              key={idx}
              className="shadow-2xl rounded-2xl p-6 space-y-5 hover:scale-105 duration-500 text-white"
            >
              <div className="flex gap-2 flex-wrap justify-center">
                {[...Array(5)].map((_, i) => (
                  <Image key={i} imgSrc={photo} />
                ))}
              </div>
              <p className="text-[16px] font-medium text-left mt-5 mb-5">
                Client feedback is a crucial aspect of any business's growth
                strategy. It offers valuable insights into customer satisfaction,
                identifies areas for improvement, and helps relationships.
              </p>
              <div className="flex items-center gap-4 text-left">
                <Image imgSrc={customer.avatar} />
                <div>
                  <h2 className="font-semibold">{customer.name}</h2>
                  <h2 className="text-sm text-gray-300">{customer.role}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;