import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  let [showOnMobile, hideOnMobile] = useState(false);
  let togglehide = () => {
    hideOnMobile(!showOnMobile);
  };

  return (
    <>
      <div className="header container">
        <Logo />
        <Navbar showOnMobile={showOnMobile} />
        <IoMenuSharp className="menu" onClick={togglehide} />
      </div>
    </>
  );
};

export default Header;
