import React from "react";
import "./Release.css";

import img1 from "../../assets/orange-ferari.jpg";
import img2 from "../../assets/green.jpg";
import img3 from "../../assets/blue-audi.jpg";

const Release = () => {
  return (
    <div className="Release-container" id="release">
      <h1>Press Release</h1>
      <div className="release-cards">
        <div className="r-card">
          <img src={img1} alt="" />
          <div className="r-content">
            <small>MediaCenter - 07/22/2024</small>
            <h3>
              Pure Driving Enjoyment:
              <br />
              nothern Pakistan
            </h3>
            <p>To the press release</p>
          </div>
        </div>

        <div className="r-card">
          <img src={img2} alt="" />
          <div className="r-content">
            <small>MediaCenter - 07/22/2024</small>
            <h3>
              Pure Driving Enjoyment:
              <br />
              nothern Pakistan
            </h3>
            <p>To the press release</p>
          </div>
        </div>

        <div className="r-card">
          <img src={img3} alt="" />
          <div className="r-content">
            <small>MediaCenter - 07/22/2024</small>
            <h3>
              Pure Driving Enjoyment:
              <br />
              nothern Pakistan
            </h3>
            <p>To the press release</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
