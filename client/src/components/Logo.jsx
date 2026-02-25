import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className="logo">
        <p>r.kumar</p>
      </div>
    </NavLink>
  );
};

export default Logo;
