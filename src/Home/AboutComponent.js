import React, { useEffect } from "react";
import People from "./Carousel/People";

export const About = () => {
  const [index, indexF] = React.useState(0);
  const { title, details } = People[index];

  function checkNumber(number) {
    if (number > People.length - 1) {
      return 0;
    }
    if (number < 0) {
      return People.length - 1;
    }
    return number;
  }

  function handleprev(params) {
    indexF((prevState) => {
      let newIndex = prevState - 1;
      return checkNumber(newIndex);
    });
  }
  function handlenext(params) {
    indexF((prevState) => {
      let newIndex = prevState + 1;
      return checkNumber(newIndex);
    });
  }

  useEffect(() => {
    const hh = setTimeout(() => {
      handlenext();
    }, 7000);
    return () => clearTimeout(hh);
  }, [index]);

  function handleRand(params) {
    let n = Math.ceil(Math.random() * People.length - 1);

    indexF(n);
  }

  const active0 = {
    backgroundColor: index === 0 ? "rgb(47, 171, 205)" : "rgb(203, 208, 216)",
  };
  const active1 = {
    backgroundColor: index === 1 ? "rgb(47, 171, 205)" : "rgb(203, 208, 216)",
  };
  const active2 = {
    backgroundColor: index === 2 ? "rgb(47, 171, 205)" : "rgb(203, 208, 216)",
  };
  const active3 = {
    backgroundColor: index === 3 ? "rgb(47, 171, 205)" : "rgb(203, 208, 216)",
  };
  return (
    <div className="aboutComponent" id="about">
      <div className="aboutTitle">
        <h1>About Danjuma</h1>
      </div>

      <div className="aboutMain">
        <div className="aboutImg">
          <img src="about/a.jpg" alt="" />
        </div>
        <div className="aboutDetails">
          <div className="con">
            <div onClick={handleprev} className="leftbutton">
              <img src="svg/right.svg" alt="" />
            </div>
            <div className="content">
              <h1>{title}</h1>

              {details.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </div>
            <div onClick={handlenext} className="rightbutton">
              <img src="svg/left.svg" alt="" />
            </div>
          </div>
          <div className="count">
            <div
              onClick={() => {
                indexF(0);
              }}
              className="dot"
              style={active0}
            ></div>
            <div
              onClick={() => {
                indexF(1);
              }}
              className="dot"
              style={active1}
            ></div>
            <div
              onClick={() => {
                indexF(2);
              }}
              className="dot"
              style={active2}
            ></div>
            <div
              onClick={() => {
                indexF(3);
              }}
              className="dot"
              style={active3}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
