import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [rewardPoints, setRewardPoints] = useState(0);
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider
      value={{ rewardPoints, setRewardPoints, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
