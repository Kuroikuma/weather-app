import "./following-weather-conditions.style.css";
import { FollowingWeatherCard } from "./FollowingWeatherCard";
import { SkeletonLoading } from "../skeleton-loading/skeleton-loading";
export const FollowingWeatherConditionsView = (props) => {
  const { convertDegree, typeDegree, consolidated_weather, isLoading } = props;
  return (
    <>
      <div className="FollowingWeatheContainer">
        {consolidated_weather &&
          consolidated_weather.map((item, index) =>
            isLoading ? (
              <SkeletonLoading key={index} />
            ) : (
              <FollowingWeatherCard
                index={index}
                key={item.id}
                item={item}
                convertDegree={convertDegree}
                typeDegree={typeDegree}
              />
            )
          )}
      </div>
    </>
  );
};
