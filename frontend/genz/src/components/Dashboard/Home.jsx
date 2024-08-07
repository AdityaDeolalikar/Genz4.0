import React from "react";
import SideBar from "../SideBar";
import DashboardNavbar from "./DashboardNavbar";
import LeaderBoard from "./LeaderBoard";
import InstaPost from "./InstaPost";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";

const Home = () => {
  const currentPage = "home";
  return (
    <div className="flex ">
      <div className="fixed top-0 w-max-[15%] z-[999]">
        <SideBar activePage={currentPage} />
      </div>
      <div className="">
        <div className="fixed pl-[15%] w-full bg-white shadow-lg opacity-100">
          <DashboardNavbar />
        </div>

        <div className="flex p-5 gap-14">
          <div className="w-2/3 flex-[0.7] h-vh">
            <InstaPost
              heading={"Aditya Deolalikar"}
              description={
                "Connecting Gen Z to opportunities and resources for creative careers."
              }
              photo={post1}
            />
            <InstaPost
              heading={"Pankaj Marathe"}
              description={
                "Empowering Gen Z with innovative tools for future success."
              }
              photo={post2}
            />
            <InstaPost
              heading={"Atharva Gadekar"}
              description={
                "Inspiring Gen Z to innovate, connect, and shape the future."
              }
              photo={post3}
            />
          </div>

          <div className="grid grid-cols-2 divide-x divide-black ">
            <div></div>
            <div></div>
          </div>
          <div className="flex-[0.3]">
            <LeaderBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
