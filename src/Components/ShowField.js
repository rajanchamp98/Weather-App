import WeatherCard from "./WeatherCard";
import "../Styling/ShowField.style.css";
import CurrentWeather from "./CurrentWeather";

function ShowField({ datas }) {
 
  return (
    <>
   
      <CurrentWeather
        location={datas.data.location}
        current={datas.data.current}
        airQuality={datas.data.current.air_quality}
      />

      <div className="ShowField">
        {datas && (
          <div className="forecasteHeading">
            <h1>Forecasting Details</h1>
          </div>
        )}
        {datas.data.forecast.forecastday.map((obj, index) => {
          return (
            <WeatherCard
              key={index}
              date={obj.date}
              img_url={obj.day.condition.icon}
              Status={obj.day.condition.text}
              temp_data={obj.day}
              astro={obj.astro}
            />
          );
        })}
      </div>
    </>
  );
}

export default ShowField;
