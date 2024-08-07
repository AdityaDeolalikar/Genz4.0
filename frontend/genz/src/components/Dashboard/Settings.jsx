import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";


const Settings = () => {
  const currentPage = "settings";
  return (
    <div>
      <div className="flex">
        <div>
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full ">
          <DashboardNavbar />

          
         
        </div>
      </div>
    </div>
  );
};

export default Settings;
