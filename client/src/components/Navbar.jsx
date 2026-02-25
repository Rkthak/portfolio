import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li className="navlist_item">
          <NavLink to="/" className="navlink">
            home
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink">
            about
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink">
            project
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink">
            CV
          </NavLink>
        </li>
        <li className="navlist_item">
          <NavLink to="/about" className="navlink">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
