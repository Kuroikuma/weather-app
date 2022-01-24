import "./today-hightlights.style.css";
import navigate from "../../../assets/direction.png";
import { SkeletonLoading } from "../skeleton-loading/skeleton-loading";

export const TodayHightlightsView = (props) => {
  const { consolidated_weather, isLoading } = props;
  return (
    <div className="TodayContainer">
      {isLoading ? null : (
        <h2 className="TodayContainer__title">Today’s Hightlights</h2>
      )}

      <div className="TodayContainer__Top">
        <div className="TodayContainer__Top__item Wind">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <>
              <p>Wind status</p>
              <p>
                {Math.round(consolidated_weather.wind_speed)}
                <span>mph</span>
              </p>
              <div className="TodayContainer__Top__item__orientation">
                <div
                  className={`TodayContainer__Top__item__orientation__Img ${consolidated_weather.wind_direction_compass}`}
                >
                  <img src={navigate} alt="navigate" />
                </div>
                <p>{consolidated_weather.wind_direction_compass}</p>
              </div>
            </>
          )}
        </div>
        <div className="TodayContainer__Top__item Humidity">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <>
              <p>Humidity</p>
              <p>
                {consolidated_weather.humidity}
                <span>%</span>
              </p>
              <div className="TodayContainer__Top__item__Bar">
                <div className="todayContainer__Top__item__Bar__top">
                  <p>0</p>
                  <p>50</p>
                  <p>100</p>
                </div>
                <div className="todayContainer__Top__item__Bar__Central">
                  <div
                    className="todayContainer__Top__item__Bar__Central2"
                    style={{
                      width: `${consolidated_weather.humidity}%`,
                      height: "100%",
                      backgroundColor: "#FFEC65",
                      borderRadius: "80px",
                    }}
                  ></div>
                </div>
                <div className="todayContainer__Top__item__Bar__Botton">
                  <p>%</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="TodayContainer__Buttton">
        <div className="TodayContainer__Buttton__item Visibility">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <>
              <p>Visibility</p>
              <p>
                {consolidated_weather.visibility
                  ? consolidated_weather.visibility
                      .toFixed(1)
                      .toString()
                      .replace(/\./g, ",")
                  : null}
                <span>miles</span>
              </p>
            </>
          )}
        </div>
        <div className="TodayContainer__Buttton__item Air-Pressure">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <>
              <p>Air Pressure</p>
              <p>
                {consolidated_weather.air_pressure} <span>mb</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
