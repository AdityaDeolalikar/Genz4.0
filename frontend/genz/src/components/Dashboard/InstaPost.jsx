import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import profile from '../../assets/profile.png'
import { BiLike } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { TbSend } from "react-icons/tb";

const InstaPost = ({heading, description, photo}) => {
  return (
    <div className="w-1/2 h-auto mx-auto bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4 mb-7 mt-14">
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-between gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-500"><img src={profile} alt="" className="w-10 h-10"/></div>
          <div className="font-bold">{heading}</div>
        </div>
        <div>
          <a href="#">
            <BsThreeDotsVertical />
          </a>{" "}
        </div>
      </div>
      <div className="mt-2">
        {description}
      </div>
      <div className="mt-2">
        <img src={photo} alt="" className="rounded-lg" />
      </div>
      <div className="grid grid-rows-2 mt-3 divide-y divide-neutral-700">
        <div></div>
        <div></div>
      </div>
      <div className="flex items-center gap-4 mt-4 ml-4">
        <div>
          <BiLike size={24} />{" "}
        </div>
        <div>
          <TfiCommentAlt size={24} />
        </div>
        <div>
          <TbSend size={24} />
        </div>
      </div>
    </div>
  );
};

export default InstaPost;
