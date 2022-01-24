import React, { useContext, useState } from "react";
import Context from "../../context/weather.context";
import { SideBarSearchView } from "./side-bar-search.view";
import { citysSupport } from "../../../services/city.services";

export const SideBarSearch = (props) => {
  const { isShowSearch, handleShow } = props;

  const { setIsLoading, setKeyboard } = useContext(Context);
  const [citys, setCitys] = useState([]);

  const handleKeyboard = (nameF) => {
    let objeto1 = citysSupport.find((element) => element.name.includes(nameF));
    let { name, id } = objeto1;
    setKeyboard(id);
    setIsLoading(false);
  };

  const handleChange = (event) => {
    setCitys(
      citysSupport.filter((element) =>
        element.name.includes(event.target.value)
      )
    );
  };
  return (
    <SideBarSearchView
      handleChange={handleChange}
      citys={citys}
      handleKeyboard={handleKeyboard}
      isShowSearch={isShowSearch}
      handleShow={handleShow}
    />
  );
};
