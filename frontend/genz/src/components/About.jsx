import React from "react";
import profession from "../assets/profession.jpg";
import career from "../assets/career.jpg";
import { FaArrowRight } from "react-icons/fa";
import HorizontalLine from "./HorizontalLine";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const useGSAP = () => {
    useEffect(() => {
      const slides = document.querySelectorAll(".slideLeft");

      slides.forEach((slideLeft) => {
        gsap.fromTo(
          slideLeft,
          {
            x: -window.innerWidth,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: slideLeft,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
              once:true,

            },
          }
        );
      });
    }, []);
    useEffect(() => {
      const slides = document.querySelectorAll(".slideRight");

      slides.forEach((slideRight) => {
        gsap.fromTo(
          slideRight,
          {
            x: window.innerWidth,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: slideRight,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
              once:true,
            },
          }
        );
      });
    }, []);
  };
  useGSAP();
  
  
  const container = useRef(null);
  useEffect(() => {
    const element = container.current;
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto mt-32 header slideLeft" id="about">
      <div
        className="items-center justify-center text-2xl font-semibold text-center text-gray-700 sm:text-3xl lg:text-3xl xl:text-3xl"
        ref={container}
      >
        Get to Know Us
        <HorizontalLine width="w-1/4" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <img
            src={profession}
            alt=""
            className="w-auto mt-20 mr-16 rounded h-96"
          />
        </div>
        <div className="items-center justify-center mt-12">
          <h6 className="mb-5 text-4xl font-semibold text-gray-700 ">
            Why is Professional Development
            <br /> Important?
          </h6>
          <p className="mt-2 font-semibold text-gray-700">
            Professional development is important because it has the potential
            to
            <br /> open opportunities for career advancement, such as
            promotions. It <br />
            can assist you in honing existing skills and in learning new ones. 
          </p>
          <button className="flex items-center justify-center gap-3 mt-5 ">
            <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black ">
              More
              <FaArrowRight />{" "}
            </div>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between slideRight">
        <div className="items-center justify-center mt-12 ml-7">
          <h6 className="mb-5 text-4xl font-semibold text-gray-700">
            Shape Your Future: Design Your <br />
            Career Path
          </h6>
          <p className="mt-2 font-semibold text-gray-700">
            Explore opportunities, set goals, and develop skills to create a
            successful and <br />
            fulfilling career path tailored to your ambitions
          </p>
          <button className="flex items-center justify-center gap-3 mt-5 ">
            <div className="flex items-center justify-center gap-3 p-2 font-semibold text-black border-2 border-black border-solid rounded hover:text-white hover:bg-black ">
              More
              <FaArrowRight />{" "}
            </div>
          </button>
        </div>
        <div>
          <img
            src={career}
            alt=""
            className="w-auto mt-20 mr-16 rounded h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
