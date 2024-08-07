import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
import "../fonts.css";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <nav className="container flex items-center justify-between w-full mx-auto mt-3 font-semibold">
        <div className="text-2xl font-bold">
          <img src={logo} alt="" className="w-12 h-12" />
        </div>
        <div>
          <div className="relative flex items-center">
            <span className="absolute left-3">
              <CiSearch size={20} className="text-gray-500" />
            </span>
            <input
              className="w-full py-1 pl-10 pr-3 text-lg border-2 border-solid rounded border-slate-400"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <button className="hover:scale-110 hover:transition-transform header">
                <a href="#homepage">Home</a>
              </button>
            </li>
            <li>
              <button className="hover:scale-110 hover:transition-transform header">
                <a href="#feedback">Feedback</a>
              </button>
            </li>
            <li>
              <button className="hover:scale-110 hover:transition-transform header">
                <a href="#about">Team</a>
              </button>
            </li>
            <li>
              <button className="hover:scale-110 hover:transition-transform header">
                <a href="#footer">Contact</a>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-9">
            <button>
              <Link to="/signup">
                <div className="gap-3 p-2 font-semibold text-white bg-black border-2 border-black border-solid rounded hover:text-black hover:bg-white">
                  Sign up
                </div>
              </Link>
            </button>
            <button className="flex items-center justify-center hover:scale-110 hover:transition-transform header">
              <Link to="/login">Login</Link>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
