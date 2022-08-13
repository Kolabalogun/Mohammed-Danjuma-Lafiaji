import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import AnimatedPage from "../Utils/AnimatedPage";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <TopBar name="Page Not Found" link="/" />
      Page NotFound
      <button
        style={{ backgroundColor: "red", padding: "10px 15px", color: "white" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Goback
      </button>
      <Footer />
    </AnimatedPage>
  );
};

export default NotFound;
