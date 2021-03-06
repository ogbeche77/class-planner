import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container navbar-section">
      <div className="row margin">
        <img
          className="col-sm-2 logo margin"
          src="cyf-logo.png"
          alt="Logo"
          href="/"
        />
        <div className="col-sm-1"></div>
        <input
          className="col-sm-6 margin form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <div className="col-1"></div>
        <Link className="col btn btn-success margin" to="/add-week">
          Add/Edit/Delete Week
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
