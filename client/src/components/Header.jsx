import Logo from "./Logo";
import Navbar from "./Navbar";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="header container">
        <Logo />
        <IoMenuSharp className="menu" />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
