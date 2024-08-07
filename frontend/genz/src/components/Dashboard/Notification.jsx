import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import profile from '../../assets/profile.png'
const Notification = () => {
  const currentPage = "notification";
  return (
    <div>
      <div className="flex">
        <div>
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full ">
          <DashboardNavbar />

          <div className="p-5 mt-4 ml-4 mr-4  rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-5">
                <div className="w-10 h-10 bg-blue-400 rounded-full"><img src={profile} alt="" /></div>
                <div className="font-bold">Harshal Marathe</div>
                <div>Posted photo with his dad</div>
              </div>
              <div className="flex items-center gap-3">
                <div>3min</div>
                <div>
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-5 mt-4 ml-4 mr-4  rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-5">
                <div className="w-10 h-10 bg-blue-400 rounded-full"><img src={profile} alt="" /></div>
                <div className="font-bold">Pankaj Patil</div>
                <div>Posted photo with his son</div>
              </div>
              <div className="flex items-center gap-3">
                <div>4min</div>
                <div>
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
