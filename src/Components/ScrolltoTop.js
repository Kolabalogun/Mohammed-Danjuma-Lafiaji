import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const ScrolltoTop = () => {
  function scrollToTop(params) {
    scroll.scrollToTop();
  }
  const [windowHeight, windowHeightF] = React.useState(0);

  React.useEffect(() => {
    const watchHeight = () => {
      let scrollY = window.scrollY;

      windowHeightF(scrollY);
    };

    window.addEventListener("scroll", watchHeight);

    return function () {
      window.removeEventListener("scroll", watchHeight);
    };
  }, []);

  const vis = {
    visibility: windowHeight > 0 ? "visible" : "hidden",
  };

  return (
    <div onClick={scrollToTop} className="scroll" style={vis}>
      <img src="svg/aup.svg" alt="" />
    </div>
  );
};

export default ScrolltoTop;
