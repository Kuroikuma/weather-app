import "./side-bar-search.style.css";
import { WeatherStates } from "../../../services/service.img";
import { SearchItem } from "./side-bar-searchCar";
export const SideBarSearchView = (props) => {
  const { handleChange, citys, handleKeyboard, isShowSearch, handleShow } =
    props;

  return (
    <div
      className={
        isShowSearch ? "SideBarSearchContainer show" : "SideBarSearchContainer"
      }
    >
      <div className="SideBarSearchContainer__icon" onClick={handleShow}>
        <div className="SideBarSearchContainer__icon__base">
          <div className="SideBarSearchContainer__icon__base__line"></div>
          <div className="SideBarSearchContainer__icon__base__line2"></div>
        </div>
      </div>
      <form method="Post" className="SideBarSearchContainer__form">
        <div className="SideBarSearchContainer__form__input">
          <input
            onChange={handleChange}
            type="text"
            placeholder="search location"
          />
          <img src={WeatherStates("sc")} alt="" />
        </div>
        <input type="submit" value="Search" />
      </form>
      <div className="SideBarSearchContainer__listCity">
        {citys.length !== undefined
          ? citys.map((item, index) => (
              <SearchItem
                key={index}
                name={item.name}
                handleKeyboard={handleKeyboard}
              />
            ))
          : null}
      </div>
    </div>
  );
};
