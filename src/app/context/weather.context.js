import React, { useState, useEffect } from "react";
const Context = React.createContext({});
export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [keyboard, setKeyboard] = useState(2442047);
  const [typeDegree, setTypeDegree] = useState("C");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const weatherData = JSON.parse(localStorage.getItem("weather"));

    if (weatherData) {
      setWeather(weatherData);
    }
  }, []);

  const convertDegree = (degree) => {
    if (typeDegree === "F") {
      degree = (degree * 9) / 5 + 32;
    }
    if (typeDegree === "C") {
      degree = ((degree - 32) * 5) / 9;
    }
    return Math.round(degree);
  };

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  }, [weather]);

  useEffect(() => {
    const keyboardData = JSON.parse(localStorage.getItem("keyboard"));

    if (keyboardData) {
      setKeyboard(keyboardData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("keyboard", JSON.stringify(keyboard));
  }, [keyboard]);

  return (
    <Context.Provider
      value={{
        typeDegree,
        setTypeDegree,
        convertDegree,
        weather,
        setWeather,
        keyboard,
        setKeyboard,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
