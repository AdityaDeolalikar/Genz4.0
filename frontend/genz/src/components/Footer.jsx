import React from "react";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
const Footer = () => {
  return (
    <div className="flex justify-between w-full mt-16 text-white bg-black h-52 header" id="footer">
      <div className="mx-12 mt-8 text-xl">
        <p className="mb-4 text-2xl font-bold ">About Us</p>
        <p className="text-lg">
          To revolutionize HR EdTech by crafting a dynamic, interactive platform{" "}
          <br /> thatempowers Gen Z to discover and excel in unconventional
          career paths, <br />
          ensuring they thrive in the future workforce.
        </p>
        
      </div>
      <div className="mx-48 mt-8 text-2xl">
        Contact Us
        <div className="flex gap-3">
          <div>
            <button><img src={linkedin} alt="" className="w-10 h-10 mt-4" /></button>
          </div>
          <div>
            <button><img src={insta} alt="" className="w-10 h-10 mt-4" /></button>
          </div>
          <div>
            <button><img src={twitter} alt="" className="w-10 h-10 mt-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
