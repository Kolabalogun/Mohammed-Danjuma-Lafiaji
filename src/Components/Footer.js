import React from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../Function/Context";

const Footer = () => {
  const { navigate } = useGlobalContext();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="summary">
          <h1>MDL</h1>
          <p>
            Nothing is less productive than to make more efficient what should
            be done at all.
          </p>

          <div className="socials">
            <a href="">
              <img src="svg/f.svg" alt="" />
            </a>
            <a href="">
              <img src="svg/i.svg" alt="" />
            </a>
            <a href="">
              <img src="svg/l.svg" alt="" />
            </a>
            <a href="">
              <img src="svg/t.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="others">
          <div className="links">
            <h4>Pages</h4>
            <ul>
              <li>
                <img src="svg/d.svg" alt="" />
                <Link
                  activeClass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footlink"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <img src="svg/d.svg" alt="" />
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footlink"
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </li>
              <li>
                <img src="svg/d.svg" alt="" />
                <Link
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footlink"
                  style={{ cursor: "pointer" }}
                >
                  Bulletin
                </Link>
              </li>
              <li>
                <img src="svg/d.svg" alt="" />
                <Link
                  activeClass="active"
                  to="/contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footlink"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="contactfooter">
            <h4>Contact</h4>
            <p>
              Nagenu Compound <br />
              Lafiagi <br />
              Kwara State.
              <br />
              <br />
              <strong>Phone</strong>{" "}
              <a href="tel:+2348132667126" style={{ color: "black" }}>
                +2348132667126
              </a>{" "}
              <br />
              <strong>Email</strong>{" "}
              <a
                href="mailto:danjumagombe@gmail.com"
                style={{ color: "black" }}
              >
                danjumagombe@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <div className="copyri">© Copyright. All Right Reserved</div>
        <div className="compNmae">
          Powered By <a href="https://kuagiresources.com">Kuagi Resources</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
