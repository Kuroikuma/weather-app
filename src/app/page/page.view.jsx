import { SideBar } from "../components/side-bar/side-bar";
import React, { useContext, useEffect } from "react";
import Context from "../context/weather.context";
import { ToggleDegreeType } from "../components/toggleDegreeType/toggleDegreeType";
import { FollowingWeatherConditions } from "../components/following-weather-conditions/following-weather-conditions";
import { TodayHightlights } from "../components/today-hightlights/today-hightlights";
import { ServicesGetWeatherState } from "../../services/weather.services";
import "./page.style.css";

export const Page = () => {
  const { setWeather, setIsLoading, keyboard } = useContext(Context);
  useEffect(() => {
    ServicesGetWeatherState(keyboard).then((response) => {
      setWeather(response);
      setIsLoading(false);
    });
  }, [keyboard]);

  return (
    <>
      <div className="pageContainer">
        <SideBar />
        <div className="pageContainerRight">
          <div className="pageContainerRight__Top">
            <ToggleDegreeType />
            <FollowingWeatherConditions />
            <TodayHightlights />
            <div className="pageContainerRight__Bottom">
              <p>created by OdiseoJR - devChallenges.io</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
