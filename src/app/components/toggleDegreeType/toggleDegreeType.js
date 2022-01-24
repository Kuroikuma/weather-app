import React, { useContext } from "react";
import { ToggleDegreeTypeView } from "./toggleDegreeType.view";
import Context from "../../context/weather.context";

export const ToggleDegreeType = () => {
  const { setTypeDegree, typeDegree, isLoading } = useContext(Context);
  const handletypeDegree = (event) => {
    if (event.target.name === "F") {
      setTypeDegree("F");
    } else if (event.target.name === "C") {
      setTypeDegree("C");
    }
  };
  return (
    <ToggleDegreeTypeView
      isLoading={isLoading}
      typeDegree={typeDegree}
      handletypeDegree={handletypeDegree}
    />
  );
};
