import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/linkedin.png'

const Help = () => {
  const currentPage = "help";
  return (
    <div>
      <div className="flex">
        <div>
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full">
          <DashboardNavbar />

          <div className="flex flex-col items-center justify-center p-5 mx-auto mt-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg h-96 w-96">
            <span className="text-3xl font-bold">Contact Us On</span>
            <div className="flex gap-3">
              <div><button><img src={linkedin} alt="" className="w-10 h-10 mt-4" /></button></div>
              <div><button><img src={insta} alt="" className="w-10 h-10 mt-4" /></button></div>
              <div><button><img src={twitter} alt="" className="w-10 h-10 mt-4" /></button></div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div>
                <input
                  type="text"
                  className="h-10 p-3 mt-10 border-2 border-black border-solid rounded-lg bg-slate-100"
                  placeholder="Enter Email..."
                />
              </div>
              <div className="flex items-center justify-center w-20 h-10 p-5 mt-10 text-white bg-black rounded-lg">
                <a href="#">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
