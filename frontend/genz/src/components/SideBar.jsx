import React, { useState } from "react";
import { IoHome, IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaChalkboardTeacher, FaGift } from "react-icons/fa";
import { RiMailAddFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdHelp, MdOutlineSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const SideBar = ({ activePage, iconSize }) => {
  const [isOpen, setIsOpen] = useState(true);

  const getClassNames = (page) =>
    `flex items-center justify-start gap-3 mt-5  text-md hover:scale-110  ${
      activePage === page ? "font-bold underline" : ""
    }`;

  return (
    <div className="h-full p-8 ">
      <button
        className="absolute top-4 left-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCross2 size={30} /> : <MdOutlineSegment size={30} />}
      </button>

      {isOpen ? (
        <div className="mt-16">
          <Link to="/dashboard/home">
            <button className={getClassNames("home")}>
              <IoHome />
              Home
            </button>
          </Link>
          <Link to="/dashboard/notification">
            <button className={getClassNames("notification")}>
              <IoNotifications />
              Notification
            </button>
          </Link>
          <Link to="/dashboard/challenges">
            <button className={getClassNames("challenges")}>
              <TiTick />
              Challenges
            </button>
          </Link>
          <Link to="/dashboard/learning">
            <button className={getClassNames("learnings")}>
              <FaChalkboardTeacher />
              Profile
            </button>
          </Link>
          
          <Link to="/dashboard/community">
            <button className={getClassNames("community")}>
              <FaPeopleGroup />
              Community
            </button>
          </Link>
          <Link to="/dashboard/reedem">
            <button className={getClassNames("reedem")}>
              <FaGift />
              Reedem
            </button>
          </Link>
          
          <Link to="/dashboard/help">
            <button className={getClassNames("help")}>
              <MdHelp />
              Help
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-16">
          <Link to="/">
            <button className="my-3">
              <IoHome size={iconSize} />
            </button>
          </Link>
          <Link to="/notification">
            <button className="my-3">
              <IoNotifications size={iconSize} />
            </button>
          </Link>
          <Link to="/challenges">
            <button className="my-3">
              <TiTick size={iconSize} />
            </button>
          </Link>
          <Link to="/learning">
            <button className="my-3">
              <FaChalkboardTeacher size={iconSize} />
            </button>
          </Link>
          <Link to="/genz">
            <button className="my-3">
              <RiMailAddFill size={iconSize} />
            </button>
          </Link>
          <Link to="/community">
            <button className="my-3">
              <FaPeopleGroup size={iconSize} />
            </button>
          </Link>
          <Link to="/reedem">
            <button className="my-3">
              <FaGift size={iconSize} />
            </button>
          </Link>
          <Link to="/settings">
            <button className="my-3">
              <IoSettingsSharp size={iconSize} />
            </button>
          </Link>
          <Link to="/help">
            <button className="my-3">
              <MdHelp size={iconSize} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBar;
