import "./side-bar.style.css";
import React from "react";
import { SkeletonLoading } from "../skeleton-loading/skeleton-loading";
import { WeatherStates } from "../../../services/service.img";
import { SideBarSearch } from "../side-bar-search/side-bar-search";

const SideBarView = (props) => {
  const {
    consolidated_weather,
    title,
    date,
    typeDegree,
    degree,
    isLoading,
    isShowSearch,
    handleShow,
  } = props;
  return (
    <>
      <SideBarSearch isShowSearch={isShowSearch} handleShow={handleShow} />
      <div className="sideBarContainer">
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          <>
            <div className="sideBarContainer__location">
              <button
                onClick={handleShow}
                className="sideBarContainer__location__search"
              >
                Seach for places
              </button>
              <button className="sideBarContainer__location__current">
                <img src={WeatherStates("ml")} alt="My-Location" />
              </button>
            </div>
            <div className="sideBarContainer__weatherStateImg">
              <img
                id="backgroundBar"
                src={WeatherStates("cb")}
                alt="CloudBackgroud"
              />
              <img
                id="imgBar"
                src={WeatherStates(consolidated_weather.weather_state_abbr)}
                alt={consolidated_weather.weather_state_name}
              />
            </div>
            <div className="sideBarContainer__temp">
              <p>
                {degree}
                <span>º{typeDegree}</span>
              </p>
            </div>
            <div className="sideBarContainer__weatherStateName">
              <p>{consolidated_weather.weather_state_name}</p>
            </div>
            <div className="sideBarContainer__info">
              <div className="sideBarContainer__info__Top">
                <p>Today</p>
                <p className="sideBarContainer__info__Top__space">•</p>
                <p>{date}</p>
              </div>
              <div className="sideBarContainer__info__Bottom">
                <img src={WeatherStates("p")} alt="pin" />
                <div className="sideBarContainer__info__Bottom__location">
                  <p>{title}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(SideBarView);
