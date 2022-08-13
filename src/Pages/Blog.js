import React, { useEffect } from "react";

import Content from "../Blog/Content";
import Loader from "../Components/Loader";

import TopBar from "../Components/TopBar";
import { useGlobalContext } from "../Function/Context";
import Footer from "../Components/Footer";
import AnimatedPage from "../Utils/AnimatedPage";

const Blog = () => {
  const { loader } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      {loader ? (
        <Loader notification="Loading your Bulletin" />
      ) : (
        <>
          <div className="blog">
            <TopBar name="Bulletin" link="/bulletin" id="home" />
            <Content />
          </div>
          <Footer />
        </>
      )}
    </AnimatedPage>
  );
};

export default Blog;
