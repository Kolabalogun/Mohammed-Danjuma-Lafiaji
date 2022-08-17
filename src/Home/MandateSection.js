import React from "react";
import { Link } from "react-scroll";

const MandateSection = () => {
  return (
    <div className="mandateSection">
      <div className="topSect">
        <div className="leftMandate">
          <h1>Our Mandates</h1>
          <div className="listsofMandates">
            <div className="list">
              <img src="svg/store-line.svg" alt="" />
              <span>Health Care Facilities</span>
            </div>
            <div className="list">
              <img src="svg/bar-chart-box-line.svg" alt="" />
              <span>Education Support</span>
            </div>
            <div className="list">
              <img src="svg/calendar-check-line.svg" alt="" />
              <span>Job Opportunities</span>
            </div>
            <div className="list">
              <img src="svg/paint-brush-line.svg" alt="" />
              <span>Transfomation</span>
            </div>
            <div className="list">
              <img src="svg/database-2-line.svg" alt="" />
              <span>Transparency</span>
            </div>
            <div className="list">
              <img src="svg/gradienter-line.svg" alt="" />
              <span>Business Development</span>
            </div>
            <div className="list">
              <img src="svg/file-list-3-line.svg" alt="" />
              <span>Equity</span>
            </div>
            <div className="list">
              <img src="svg/base-station-fill.svg" alt="" />
              <span>Security</span>
            </div>
          </div>
        </div>
        <div className="rightMandate">
          <img src="img/e.png" alt="" />
        </div>
      </div>
      <div className="buttomSet">
        <div className="row">
          <div className="rowlft">
            <h1>
              Great leaders do not desire to lead but to serve. Integrity is the
              most valuable and respected quality of Leadership.
            </h1>
            <p>
              Support and vote Hon. Mohammed Danjuma for Kwara North House of
              Representative under the platform of NNPP✅
            </p>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="rowlftBtn"
            >
              See Bulletin
            </Link>
          </div>
          <div className="rightlft"></div>
        </div>
      </div>
    </div>
  );
};

export default MandateSection;
