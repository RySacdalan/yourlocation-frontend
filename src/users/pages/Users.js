import React from "react";
import UserLists from "../components/UserLists";
import sample from "../../images/sample.png";

const Users = () => {
  const USER = [
    {
      id: "uid1",
      name: "Ryan Sacdalan",
      image: sample,
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
