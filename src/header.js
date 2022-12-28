import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const { user } = useUser();

  return <div>header - ${user?.userName}</div>;
};

export default Header;
