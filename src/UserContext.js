import { createContext, useState, useContext } from "react";

export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  console.log("User Provide Context");
  const [user] = useState({
    name: "vigneshMohan",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
