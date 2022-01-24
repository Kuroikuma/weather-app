import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/weather.context";
import { FollowingWeatherConditionsView } from "./following-weather-conditions.view";

export const FollowingWeatherConditions = () => {
  const { weather, convertDegree, typeDegree, isLoading } = useContext(Context);
  const [consolidated_weather, setConsolidated_weather] = useState([]);

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      setConsolidated_weather(weather.consolidated_weather.slice(1, 6));
    }
  }, [weather]);

  return (
    <FollowingWeatherConditionsView
      convertDegree={convertDegree}
      typeDegree={typeDegree}
      isLoading={isLoading}
      consolidated_weather={consolidated_weather}
    />
  );
};
