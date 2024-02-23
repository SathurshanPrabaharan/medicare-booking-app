import React, { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AuthContext } from "../../Context/authContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <div className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =========== logo =========== */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* =============== menu ============ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================== Nav Right ======================== */}
          <div className="flex items-center gap-4 justify-end">
            <h1>{user?.name}</h1>
            {token && user ? (
              <div>
                <Link to={`${role==='doctor'?'/doctors/profile/me':'users/profile/me'}`}>
                  <figure className="w-[35px] h-[35px] rouned-full">
                    <img
                      src={user.photo?user.photo:userImg}
                      // src={user.photo}
                      className="w-full rounded-full"
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 curson-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
