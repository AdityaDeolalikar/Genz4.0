// import React from "react";
// import star from "../../assets/star.png";
// import ProgressBar from "./ProgressBar";

// const Card = ({heading}) => {

//   return (
//     <div className="h-40 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 p-3 mb-4 mr-5">
//       <div className="flex justify-between">
//         <div className="text-xl font-bold">{heading}</div>

//         <div className="flex items-center justify-center gap-2 font-bold">
//           10 <img src={star} alt="" className="w-5 h-5" />
//         </div>
//       </div>
//       <div>Lorem ipsum dolor sit.</div>
//       <div className="flex-col mt-8">
//         <div className="flex items-center justify-between">
//           <div className="font-semibold">Progress</div>
//           <div className="font-semibold">5/10</div>
//         </div>
//         <div className="mt-2">
//           <ProgressBar progress={50} />{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useContext, useEffect, useRef, useState } from "react";
import star from "../../assets/star.png";
import ProgressBar from "./ProgressBar";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contants";

const Card = ({ heading, points, completePoints }) => {
  const pointsRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPointsAdded, setIsPointsAdded] = useState(false);
  const { rewardPoints, setRewardPoints } = useContext(UserContext);
  useEffect(() => {
    if (points) {
      const match = points.match(/(\d+)\/(\d+)/);
      if (match) {
        const currentPoints = parseInt(match[1], 10);
        const totalPoints = parseInt(match[2], 10);
        setProgress((currentPoints / totalPoints) * 100);
      }
    }
  }, [points]);

  const handleAddPoints = () => {
    const user = JSON.parse(window.localStorage.getItem("auth"));
    const data = {
      email: user.email,
      points: Number.parseInt(completePoints),
    };
    axios
      .post(`${USER_API_END_POINT}/addPoints`, data)
      .then((res) => {
        setRewardPoints(rewardPoints + completePoints);
        setIsPointsAdded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-fit rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 p-4 mb-4 mr-5">
      <div className="flex justify-between">
        <div className="text-xl font-bold">{heading}</div>

        <div className="flex items-center justify-center gap-2 font-bold">
          10 <img src={star} alt="" className="w-5 h-5" />
        </div>
      </div>
      <div>Lorem ipsum dolor sit.</div>
      <div className="flex-col mt-8">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Progress</div>
          <div ref={pointsRef} className="font-semibold">
            {points}
          </div>
        </div>
        <div className="mt-2">
          <ProgressBar progress={progress} />
        </div>
      </div>
      {progress == 100 ? (
        !isPointsAdded ? (
          <div className="flex justify-end">
            <button
              className="px-3 py-2 mt-3 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              onClick={handleAddPoints}
            >
              Claim
            </button>
          </div>
        ) : (
          <div className="flex justify-end">
            <button
              className="px-3 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => {}}
            >
              Claimed
            </button>
          </div>
        )
      ) : (
        <div className="flex justify-end">
          <button className="px-3 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Pending
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
