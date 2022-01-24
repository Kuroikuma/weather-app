const apiUrl =
  "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/";

export const ServicesGetWeatherState = (woeid) => {
  const baseUrl = `${apiUrl}${woeid}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      response.consolidated_weather.splice(
        6,
        response.consolidated_weather.length
      );
      const data = response;

      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
