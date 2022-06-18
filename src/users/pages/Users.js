import React from "react";
import UserLists from "../components/UserLists";

const Users = () => {
  const USER = [
    {
      id: "uid1",
      name: "Ryan Sacdalan",
      image:
        "https://www.pexels.com/photo/man-standing-in-front-of-window-12263516/",
      places: 5,
    },
  ];
  return (
    <div>
      <UserLists items={USER} />
    </div>
  );
};

export default Users;
