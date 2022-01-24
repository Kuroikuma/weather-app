import React, { useState, useEffect } from "react";
import { WeatherStates } from "../../../services/service.img";
import "./following-weather-conditions.style.css";

export const FollowingWeatherCard = (props) => {
  const { convertDegree, typeDegree, item, index } = props;
  const [date, setDate] = useState("");
  const [degreeMin, setDegreeMin] = useState(0);
  const [degreeMax, setDegreeMax] = useState(0);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      const hoy = new Date(item.applicable_date);
      const arrayDeCadenas = hoy.toUTCString().split(2022);
      setDate(arrayDeCadenas[0]);
      setDegreeMax(Math.round(item.max_temp));
      setDegreeMin(Math.round(item.min_temp));
    }
  }, []);

  useEffect(() => {
    if (degreeMax) {
      setDegreeMax(convertDegree(degreeMax));
      setDegreeMin(convertDegree(degreeMin));
    }
  }, [typeDegree]);
  return (
    <div className="FollowingWeatheContainer__item">
      <p>{index === 0 ? "Tomorrow" : date}</p>
      <img src={WeatherStates(item.weather_state_abbr)} alt="" />
      <div className="FollowingWeatheContainer__item__groupDegree">
        <p>
          {degreeMax}º{typeDegree}
        </p>
        <p>
          {degreeMin}º{typeDegree}
        </p>
      </div>
    </div>
  );
};
