import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/weather.context";
import { TodayHightlightsView } from "./today-hightlights.view";

export const TodayHightlights = () => {
  const { weather, isLoading } = useContext(Context);
  const [consolidated_weather, setConsolidated_weather] = useState([]);

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      setConsolidated_weather(weather.consolidated_weather[0]);
    }
  }, [weather]);
  return (
    <TodayHightlightsView
      isLoading={isLoading}
      consolidated_weather={consolidated_weather}
    />
  );
};
