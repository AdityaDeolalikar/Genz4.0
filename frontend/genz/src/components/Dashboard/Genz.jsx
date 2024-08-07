import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
const Genz = () => {
  const currentPage = "genz";
  return (
    <div>
      <div className="flex">
        <div>
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full ">
          <DashboardNavbar />
          <div className="p-5">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genz;
