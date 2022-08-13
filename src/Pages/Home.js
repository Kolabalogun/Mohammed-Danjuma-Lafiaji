import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import ScrolltoTop from "../Components/ScrolltoTop";
import { useGlobalContext } from "../Function/Context";
import { About } from "../Home/AboutComponent";
import Blog from "../Home/Blog";
import CampaignBanner from "../Home/CampaignBanner";
import Footer from "../Components/Footer";
import MandateSection from "../Home/MandateSection";
import AnimatedPage from "../Utils/AnimatedPage";
import { db } from "../Utils/Firebase";

const Home = () => {
  const { loader } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="header" id="home">
            <div className="cover"></div>

            <Navbar />

            <div className="bgSide">
              <div className="leftSide">
                <h1>Hon. Mohammed Danjuma Lafiagi</h1>

                <p>
                  Welcome to the office of Honorable Mohammed Danjuma, I’m
                  running for Kwara North House of Represntitive. The NNPP Flag
                  bearer for house of representative Edu/Moro/Patigi Federal
                  constituency.
                </p>
                <div className="btns">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="abt"
                    style={{ cursor: "pointer" }}
                  >
                    About MDL
                  </Link>
                  <a className="you" href="https://www.youtube.com">
                    <img src="svg/pc.svg" alt="" />
                    <span> Watch Video</span>
                  </a>
                </div>
              </div>
              <div className="rightSide">
                <img src="img/d.png" alt="" />
              </div>
            </div>
          </div>
          <About />
          <CampaignBanner />
          <MandateSection />
          <Blog />
          <Footer />
          <ScrolltoTop />
        </>
      )}
    </AnimatedPage>
  );
};

export default Home;
