import React from "react";
import Counter from "./Counter";
import "../styles/GlobalStats.css";

const GlobalStats = () => {
  return (
    <div className="global-page">
      <div className="global-section">
        <div className="global-head">Our Numbers Speak for Themselves</div>

        <div className="stats-wrapper">
          <div className="stats-row">
            <div className="stats">
              <div className="big-number">
                <Counter target={20} suffix="+" />
              </div>
              <div className="stat-desc">
                YEARS <br />
                OF EXPERIENCE
              </div>
            </div>

            <div className="stats">
              <div className="big-number">
                <Counter target={50} suffix="+" />
              </div>
              <div className="stat-desc">
                GLOBAL <br />
                CLIENTS
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stats">
              <div className="big-number">
                <Counter target={15} suffix="+" />
              </div>
              <div className="stat-desc">
                COUNTRIES <br />
                SERVED
              </div>
            </div>

            <div className="stats">
              <div className="big-number">
                <Counter target={100000} suffix="+" />
              </div>
              <div className="stat-desc">
                MT Material <br />
                SUPPLIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
