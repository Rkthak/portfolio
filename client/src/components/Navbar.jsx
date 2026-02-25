import { NavLink } from "react-router-dom";
const Navbar = ({ showOnMobile }) => {
  return (
    <div className="navbar">
      <ul
        className={`navlist ${showOnMobile ? "open_on_mobile" : "hide_on_mobile"} `}
      >
        <li className="navlist_item">
          <NavLink to="/" className="navlink" onClick={showOnMobile}>
            home
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink" onClick={showOnMobile}>
            about
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink" onClick={showOnMobile}>
            project
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink" onClick={showOnMobile}>
            CV
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink" onClick={showOnMobile}>
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
