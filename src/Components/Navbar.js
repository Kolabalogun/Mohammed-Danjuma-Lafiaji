import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../Function/Context";

const Navbar = () => {
  const { navigate } = useGlobalContext();
  const [click, clickF] = React.useState(true);
  const [showNav, showNavF] = React.useState(true);

  const { user } = useGlobalContext();

  function navClick(params) {
    clickF((prevState) => !prevState);
  }

  const showMenuBtn = () => {
    if (window.innerWidth > 1166) {
      showNavF(true);
      clickF(true);
    } else {
      showNavF(false);
    }
  };

  React.useEffect(() => {
    showMenuBtn();
  }, []);

  window.addEventListener("resize", showMenuBtn);

  const imgIcon = {
    display: showNav ? "none" : "flex",
  };
  const navv = {
    display: showNav ? "flex" : "none",
  };
  const menu = {
    display: click ? "none" : "block",
  };
  const black = {
    color: "rgba(255, 255, 255, 0.6)",
  };

  const [bgColor, bgColorF] = useState();

  const bg = {
    backgroundColor: bgColor ? "rgba(27, 47, 69, 0.9)" : "transparent",
  };

  function handleSetActive(to) {
    if (to === "home") {
      bgColorF(null);
    } else {
      bgColorF("transparent");
    }
  }

  return (
    <div className="nav" style={bg}>
      <div className="logo">
        <h1>MDL</h1>
      </div>

      <div className="barNav" style={imgIcon} onClick={navClick}>
        <img
          className="menuNav"
          src={click ? "svg/bars-solid.svg" : "svg/share-square-regular.svg"}
          alt="menu"
        />
      </div>
      <aside style={menu}>
        <Link
          activeClass="active"
          to="home"
          href="/"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="nav-text-sidebar top"
          onSetActive={handleSetActive}
          style={black}
          onClick={() => {
            navigate("/");
            navClick();
          }}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="nav-text-sidebar"
          onSetActive={handleSetActive}
          style={black}
          onClick={() => {
            navigate("/");
            navClick();
          }}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="nav-text-sidebar"
          style={black}
          onClick={() => {
            navigate("/");
            navClick();
          }}
          onSetActive={handleSetActive}
        >
          Bulletin
        </Link>

        {user && (
          <>
            <Link
              activeClass="active"
              to=""
              href="/createpost"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-text-sidebar"
              onSetActive={handleSetActive}
              style={black}
              onClick={() => {
                navigate("/addBulletin");
                navClick();
              }}
            >
              Create Post
            </Link>
          </>
        )}

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="nav-text-sidebar"
          style={black}
          onClick={() => {
            navigate("/contact");
            navClick();
          }}
          onSetActive={handleSetActive}
        >
          Contact
        </Link>
      </aside>

      <div className="navBars" style={navv}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="navs active"
          onSetActive={handleSetActive}
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="navs"
          onSetActive={handleSetActive}
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="navs"
          style={{ cursor: "pointer" }}
          onSetActive={handleSetActive}
          onClick={() => {
            navigate("/");
          }}
        >
          Bulletin
        </Link>
        {user ? (
          <>
            <Link
              activeClass="active"
              to="/addBulletin"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navs"
              onSetActive={handleSetActive}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/addBulletin");
              }}
            >
              Create Post
            </Link>
          </>
        ) : (
          <>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navs"
              style={{ cursor: "pointer" }}
              onSetActive={handleSetActive}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
