import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { PuffLoader } from "react-spinners";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 813) {
      return { right: !menuOpen && "-100%" };
    }
  };
  const { loginWithRedirect, isAuthenticated, user, isLoading, logout } =
    useAuth0();

  return (
    <section className="header-wrapper">
      <div className="flexCenter paddings innerWidth container">
        <Link to="/">
          <img className="logo" src="./logo.png" alt="logo" />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flexCenter menu" style={getMenuStyles(menuOpen)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:godfredmirekuowusu@gmail.com">Contact</a>
            {/* Login button */}
            {isAuthenticated ? (
              <ProfileMenu user={user?.picture} logout={logout} />
            ) : (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            )}
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
