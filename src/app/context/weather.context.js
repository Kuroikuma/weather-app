import React, { useState, useEffect } from "react";

const Context = React.createContext({});
export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [keyboard, setKeyboard] = useState(2449808);
  const [typeDegree, setTypeDegree] = useState("C");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const keyboardData = JSON.parse(localStorage.getItem("keyboard"));

    if (keyboardData) {
      setKeyboard(keyboardData);
    }
    console.log("1" + localStorage.getItem("keyboard"));
  }, []);

  useEffect(() => {
    if (keyboard !== 2449808) {
      console.log("que a pachao" + keyboard);
      localStorage.setItem("keyboard", JSON.stringify(keyboard));
    }
  }, [keyboard]);

  useEffect(() => {
    const weatherData = JSON.parse(localStorage.getItem("weather"));

    if (weatherData) {
      setWeather(weatherData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  }, [weather]);

  const convertDegree = (degree) => {
    if (typeDegree === "F") {
      degree = (degree * 9) / 5 + 32;
    }
    if (typeDegree === "C") {
      degree = ((degree - 32) * 5) / 9;
    }
    return Math.round(degree);
  };

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
