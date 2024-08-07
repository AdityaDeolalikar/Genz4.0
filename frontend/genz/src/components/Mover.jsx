import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client_1 from "../assets/client_1.jpg";
import client_2 from "../assets/client_2.jpg";
import client_3 from "../assets/client_3.png";
import client_4 from "../assets/client_4.jpg";
import client_5 from "../assets/client_5.jpg";
import client_6 from "../assets/client_6.jpg";

const Mover = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
  };
  return (
    <div className="mt-14 slider-container">
      <Slider {...settings}>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-32 h-32 mx-auto text-center ">
            <img
              src={client_1}
              alt=""
              className="object-cover w-32 h-32 overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-2 text-2xl font-semibold text-center">
            Victor pan
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center w-32 h-32 mx-auto text-center ">
            <img
              src={client_2}
              alt=""
              className="object-cover w-32 h-32 overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-2 text-2xl font-semibold text-center">
            Dennis Ritchie
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-32 h-32 mx-auto text-center ">
            <img
              src={client_3}
              alt=""
              className="object-cover w-32 h-32 overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-2 text-2xl font-semibold text-center">
            Linus Torvalds
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-32 h-32 mx-auto text-center ">
            <img
              src={client_4}
              alt=""
              className="object-cover w-32 h-32 overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-2 text-2xl font-semibold text-center">
            Admiral Grace
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-32 h-32 mx-auto text-center ">
            <img
              src={client_5}
              alt=""
              className="object-cover w-32 h-32 overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-2 text-2xl font-semibold text-center">
            Gary Kildall
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-32 h-32 mx-auto text-center ">
            <img
              src={client_6}
              alt=""
              className="object-cover w-32 h-32 overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-2 text-2xl font-semibold text-center">
            Lisa Crispin
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Mover;
