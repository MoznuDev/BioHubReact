import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
const SocialIcon = () => {
    const icons = [FiFacebook, FiTwitter, FiInstagram, FiLinkedin];
  return (
   <>
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
   </>
  );
};

export default SocialIcon