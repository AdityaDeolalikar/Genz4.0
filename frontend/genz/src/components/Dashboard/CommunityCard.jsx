import React from "react";

const CommunityCard = ({  heading, color, showJoinButton, onJoin, onClick }) => {
  return (
    <div className="w-40 h-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg hover:scale-105">
      <div className="flex items-center justify-center mx-auto">
        <a href="#">
          <div
            className="flex items-center justify-center w-20 h-20 mx-auto mt-3 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <div className="flex items-center justify-center mt-2 mb-3 text-sm font-bold ">
            {heading}
          </div>
          {showJoinButton && (
            <button className="flex items-center justify-center px-4 py-2 mx-auto mb-5 text-white bg-gray-800 rounded hover:bg-blue-400"onClick={onJoin}>
              Join
            </button> 
          )}
        </a>
      </div>
    </div>
  );
};

export default CommunityCard;
