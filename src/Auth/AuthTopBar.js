import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AuthNav from "./AuthNav";

const AuthTopBar = ({ user, handleLogout, name }) => {
  return (
    <>
      <div className="Topbarcover"></div>
      <div className="Topbar">
        <AuthNav user={user} handleLogout={handleLogout} />
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default AuthTopBar;
