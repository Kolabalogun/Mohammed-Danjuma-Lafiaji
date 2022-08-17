import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../Function/Context";
// import { useGlobalContext } from "../Function/Context";

const AuthNav = ({}) => {
  const { user, handleLogout, pageType, navigate, signInType } =
    useGlobalContext();

  const userId = user?.uid;

  const [click, clickF] = React.useState(true);
  const [showNav, showNavF] = React.useState(true);

  function navClick() {
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
    color: "rgba(255,255,255, 0.9)",
  };

  const [bgColor, bgColorF] = useState(null);

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
        <Link to="/">
          <div
            style={black}
            onClick={() => {
              navigate("/");
              navClick();
            }}
            className="nav-text-sidebar top"
          >
            Home
          </div>
        </Link>
        <Link to="/bulletin">
          <div
            style={black}
            onClick={() => {
              navigate("/");
              navClick();
            }}
            className="nav-text-sidebar"
          >
            Bulletin
          </div>
        </Link>

        {user && !signInType ? (
          <>
            <Link to="/createpost">
              <div
                style={black}
                onClick={() => {
                  navigate("/addBulletin");
                  navClick();
                }}
                href="/blog"
                className="nav-text-sidebar"
              >
                Create Post
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth">
              <div
                style={black}
                onClick={navClick}
                className="nav-text-sidebar"
              >
                Login
              </div>
            </Link>
          </>
        )}

        {userId && !signInType && (
          <>
            <div className="nav-text-sidebar">{user?.displayName}</div>
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                cursor: "pointer",
                border: "none",
              }}
              onClick={handleLogout}
              className="nav-text-sidebar"
            >
              Log Out
            </div>
          </>
        )}
        <Link to="/contact">
          <div
            style={black}
            onClick={() => {
              navigate("/contact");
              navClick();
            }}
            className="nav-text-sidebar"
          >
            Contact
          </div>
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
          style={{ cursor: "pointer" }}
          onSetActive={handleSetActive}
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

        {user && !signInType ? (
          <>
            {pageType === "editBlog" ? (
              ""
            ) : (
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
            )}
          </>
        ) : (
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
                navigate("/auth");
              }}
            >
              Login
            </Link>
          </>
        )}
        {userId && !signInType && (
          <>
            <div className="navs" style={{ display: "flex" }}>
              <div className="profileLogo">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="logo"
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
              </div>
              <p style={{ paddingLeft: "10px" }}>{user?.displayName}</p>
            </div>
            <div
              className="navs"
              onClick={handleLogout}
              style={{
                color: "red",

                cursor: "pointer",
              }}
            >
              Log Out
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthNav;
