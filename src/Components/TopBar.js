import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const TopBar = ({ name, link, backlink, backname }) => {
  return (
    <>
      <div className="Topbarcover"></div>
      <div className="Topbar">
        <Navbar />
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default TopBar;
