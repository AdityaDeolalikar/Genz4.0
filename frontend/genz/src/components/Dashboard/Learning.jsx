import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import DayPointsChart from "./DayPointsChart";
import { FaPlus } from "react-icons/fa";
import profile from "../../assets/profile.png";
const Learning = () => {
  const currentPage = "learnings";
  const user = JSON.parse(window.localStorage.getItem("auth"));

  return (
    <div>
      <div className="flex">
        <div>
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full">
          <DashboardNavbar />
          <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-100 h-64 p-5 flex items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg ">
              <div className="w-24 h-24 bg-blue-300 rounded-full mr-7">
                <img src={profile} alt="" className="w-24 h-24 rounded-full" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-bold">Harshal Patil</h2>
                <p className="text-sm text-gray-700">
                  Aspiring <br />
                  AI&DS Engineer <br />| KKWIEER | Joint Secretary,
                  <br /> Elite Club| Core Committee, MIBCS
                </p>
                <div className="flex gap-4">
                   <div className="mt-4 text-sm font-semibold text-blue-800 ">
                  <a href="" className="p-2 bg-white rounded-lg">
                    Sync
                  </a>
                </div>
                <div className="flex items-center mt-2 text-sm font-semibold text-blue-800 ">
                  <a href="" className="p-2 bg-white rounded-lg">
                    Message
                  </a>
                </div>
                </div>
               
              </div>
            </div>

            <div className="grid grid-cols-2 col-span-1 gap-6 md:col-span-2 lg:col-span-2">
              <div className="p-5 bg-blue-100 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <h1 className="text-xl font-bold underline ">About</h1>
                <p className="mt-5 text-md">
                  Hello, I’m Harshal Patil, currently pursuing a B.Tech degree
                  in Artificial Intelligence and Data Science at KKWIEER. 📚 I
                  am passionate about the transformative potential of AI and
                  also video editing.
                </p>
              </div>
              <div className="p-5 bg-blue-100 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <h1 className="text-xl font-bold underline">Skills</h1>
                <p className="mt-5 text-md">
                  Technical: Good in Python, C and CPP, with skills like
                  decision-making and leadership in tech projects.
                  Non-Technical: Skilled in cinematography and video editing,
                  combining creative and analytical perspectives.
                </p>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-3">
              <DayPointsChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
