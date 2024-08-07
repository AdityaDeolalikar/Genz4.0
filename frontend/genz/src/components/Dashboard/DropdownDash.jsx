import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
{
  /* <MdArrowDropUp /> */
}

const DropdownDash = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none"
        >
          <FaUserCircle className="text-3xl text-gray-600" />
          {isOpen ? (
            <MdArrowDropUp className="ml-1 text-xl text-gray-600" />
          ) : (
            <IoMdArrowDropdown className="ml-1 text-xl text-gray-600" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-50 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={handleLogout}
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownDash;
