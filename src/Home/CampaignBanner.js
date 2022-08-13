import React from "react";
import { Link } from "react-router-dom";

const CampaignBanner = () => {
  return (
    <div className="campaignBanner">
      <h1>
        I’m aspiring to represent Kwara North at the Federal House of
        Representitive.
      </h1>
      <p>
        Under the platform of the NNPP, we will proactively identify what
        resonates with our constituents and pursue its realization in their
        overall interests.
      </p>
      <Link className="campaignBtn" to="/detail/45xF8TmBuH5tjUrGYyNW">
        See Campaign
      </Link>
    </div>
  );
};

export default CampaignBanner;
