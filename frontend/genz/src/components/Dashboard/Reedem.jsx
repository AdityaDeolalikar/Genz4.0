import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import ReedemCard from "./ReedemCard";
import { FaArrowRight } from "react-icons/fa";
import communication from "../../assets/communication.jpg";
import critical from "../../assets/critical.jpg";
import bias from "../../assets/bias.jpg";

const Reedem = () => {
  const currentPage = "reedem";
  return (
    <div className="flex">
      <div>
        <SideBar activePage={currentPage} />
      </div>
      <div className="w-full ">
        <DashboardNavbar />

        <div className="p-5">
          <div className="w-48 mt-10">
            <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black">
              <a href="">Visit Courses</a>
              <FaArrowRight />
            </div>
          </div>

          <div className="flex justify-between text-2xl font-bold mt-14">
            <div>Popular Courses</div>
            <div className="text-lg text-blue-600 underline"><a href="#">View More Courses</a></div>
          </div>

          <div className="flex mt-8">
            <ReedemCard photo={communication} heading={"Communication Skills"} duration={"50mins"} coins={50}/>
            <ReedemCard photo={bias} heading={"Unconsious Bias"} duration={"2hrs"} coins={100}/>
            <ReedemCard photo={critical} heading={"Critical Thinking"} duration={"1hr"} coins={150}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reedem;
