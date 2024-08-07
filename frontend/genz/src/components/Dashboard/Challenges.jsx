import React from "react";

import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import Card from "./Card";

const Challenges = () => {
  const currentPage = "challenges";
  return (
    <div className="">
      <div className="flex">
        <div className="">
          <SideBar activePage={currentPage} />
        </div>
        <div className="w-full ">
          <DashboardNavbar />
          <div className="flex flex-wrap p-5">
            <div>
              <h1 className="mb-3 text-xl font-bold underline">
                Daily Challenges
              </h1>
              <Card heading={"Task 3"} points={"10/10"} completePoints={10} />
              <Card heading={"Task 2"} points={"10/10"} completePoints={10} />
              <Card heading={"Task 1"} points={"4/10"} completePoints={10} />
            </div>
            <div>
              <h1 className="mb-3 text-xl font-bold underline">
                Weekly Challenges
              </h1>
              <Card heading={"Task 1"} points={"7/10"} completePoints={10} />
              <Card heading={"Task 2"} points={"10/10"} completePoints={100} />
              <Card heading={"Task 3"} points={"5/10"} completePoints={10} />
            </div>
            <div>
              <h1 className="mb-3 text-xl font-bold underline">Games</h1>
              <Card heading={"Task 1"} points={"10/10"} completePoints={10} />
              <Card heading={"Task 2"} points={"3/10"} completePoints={10} />
              <Card heading={"Task 3"} points={"4/10"} completePoints={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
