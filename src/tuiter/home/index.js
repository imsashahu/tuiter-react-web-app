import React from "react";
import TuitsList from "../tuits/tuits-list.js";
import WhatsHappening from "./whats-happening.js";

const HomeComponent = () => {
  return (
    <>
      <h2>Home</h2>
      <WhatsHappening />
      <TuitsList />
    </>
  );
};
export default HomeComponent;
