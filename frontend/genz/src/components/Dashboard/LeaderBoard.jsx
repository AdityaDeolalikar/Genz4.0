import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/contants";
const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("auth"));

    // fetch points
    axios
      .post(`${USER_API_END_POINT}/getUsers`, {
        email: user.email,
      })
      .then((res) => {
        setUsers(res.data.users);
      });
  }, []);
  return (
    <div>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-14">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Leaderboard
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Points
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {users.length > 0 &&
              users.map((user) => (
                <li className="py-3 sm:py-4" key={user.email}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={profile}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {user.rewardPoints}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
