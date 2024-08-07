import React, { useState, useContext } from "react";
import star from "../../assets/star.png";
import Ratings from "./Ratings";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contants";
const ReedemCard = ({ photo, heading, duration, coins }) => {
  const [isRedeemed, setIsRedeemed] = useState(false);
  const { rewardPoints, setRewardPoints } = useContext(UserContext);

  const handleRedeem = () => {
    const user = JSON.parse(window.localStorage.getItem("auth"));
    const data = {
      email: user.email,
      points: Number.parseInt(coins),
    };
    axios
      .post(`${USER_API_END_POINT}/redeemPoints`, data)
      .then((res) => {
        setRewardPoints(rewardPoints - coins);
        setIsRedeemed(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-3  rounded-xl w-72 h-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mr-8">
      <img src={photo} alt="" className="w-full h-1/2" />
      <p className="mt-2 text-lg font-bold text-blue-900">{heading}</p>
      <p className="font-semibold">Duration : {duration}</p>
      <p className="flex mt-2">
        <Ratings />
      </p>
      <button className="flex items-center justify-center gap-2 p-2 mx-auto border-2 border-black border-solid rounded-lg mt-9">
        <span className="font-bold">
          {!isRedeemed ? (
            <button onClick={handleRedeem}>Redeem {coins}</button>
          ) : (
            "Redemmed"
          )}
        </span>
        <img src={star} alt="" className="w-5 h-5" />
      </button>
    </div>
  );
};
export default ReedemCard;
