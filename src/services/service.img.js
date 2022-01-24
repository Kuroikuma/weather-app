import Clear from "./../assets/Clear.png";
import CloudBackground from "./../assets/Cloud-background.png";
import Hail from "./../assets/Hail.png";
import HeavyCloud from "./../assets/HeavyCloud.png";
import HeavyRain from "./../assets/HeavyRain.png";
import LightCloud from "./../assets/LightCloud.png";
import LightRain from "./../assets/LightRain.png";
import Shower from "./../assets/Shower.png";
import Sleet from "./../assets/Sleet.png";
import Snow from "./../assets/Snow.png";
import Thunderstorm from "./../assets/Thunderstorm.png";
import myLocation from "./../assets/my-location.png";
import pin from "./../assets/pin.png";
import search from "./../assets/search.png";

export const WeatherStates = (Abbreviation) => {
  const WEATHER_STATES = {
    sn: Snow,
    sl: Sleet,
    h: Hail,
    t: Thunderstorm,
    hr: HeavyRain,
    lr: LightRain,
    s: Shower,
    hc: HeavyCloud,
    lc: LightCloud,
    c: Clear,
    ml: myLocation,
    p: pin,
    cb: CloudBackground,
    sc: search,
  };
  return WEATHER_STATES[Abbreviation];
};
