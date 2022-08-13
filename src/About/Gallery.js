import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="img1">
        <img src="about/a.jpg" alt="" />
      </div>
      <div className="img1">
        <img src="about/c.jpg" alt="" />
      </div>
      <div className="img3">
        <div className="sec1">
          <img src="about/d.jpg" alt="" />
        </div>
        <div className="sec2">
          <div className="split">
            <img src="about/b.jpg" alt="" />
          </div>
          <div className="split">
            <img src="about/e.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
