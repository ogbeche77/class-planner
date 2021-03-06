import React from "react";
import { Link, Image } from "react-router-dom";

import Logo from "./images/cyf-logo.png";

const Navbar = () => {
  return (
    <div className="container navbar-section">
      <div className="row margin">
        <img className="col-sm-2 logo margin active" src={Logo} alt="Logo" />
        <div className="col-sm-1"></div>
        <input
          className="col-sm-6 margin form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <div className="col-1"></div>
        <Link className="col btn btn-primary margin" to="/">
          Return To Home
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
