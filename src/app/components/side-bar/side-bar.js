import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/weather.context";
import SideBarView from "./side-bar.view";

export const SideBar = () => {
  const { weather, convertDegree, typeDegree, isLoading } = useContext(Context);
  const [consolidated_weather, setConsolidated_weather] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [degree, setDegree] = useState(0);
  const [isShowSearch, setIsShowSearch] = useState(false);

  const handleShow = () => {
    setIsShowSearch(!isShowSearch);
  };

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      const hoy = new Date(weather.consolidated_weather[0].created);
      const arrayDeCadenas = hoy.toUTCString().split(2022);
      setDate(arrayDeCadenas[0]);
      setConsolidated_weather(weather.consolidated_weather[0]);
      setTitle(weather.title);
      setDegree(Math.round(weather.consolidated_weather[0].the_temp));
    }
  }, [weather]);
  useEffect(() => {
    if (degree) {
      setDegree(convertDegree(degree));
    }
  }, [typeDegree]);
  return (
    <SideBarView
      consolidated_weather={consolidated_weather}
      title={title}
      date={date}
      isShowSearch={isShowSearch}
      handleShow={handleShow}
      degree={degree}
      typeDegree={typeDegree}
      isLoading={isLoading}
    />
  );
};
