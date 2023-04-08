import React from "react";
import "../Styling/CurrentWeather.style.css"; 
 
// import image_day from '../Resourse/Images/113.png'
// import image_night from '../Resourse/Images/114.png'

function CurrentWeather({ location, current , airQuality }) {
  // console.log(location);
  // console.log(current);
  // console.log();

  const{last_updated,temp_c,temp_f,humidity,wind_degree,wind_dir,wind_kph,pressure_mb,is_day}=current

  function EpaStandard(value){
    switch(value){
      case 1:
        return <p style={{backgroundColor:"green" }}>Good</p>
      case 2:
        return <p style={{backgroundColor:"lightgreen"}}>Moderate</p>
      case 3:
        return <p style={{backgroundColor:"orange"}}>Unhealthy for Sensative group</p>
      case 4:
        return <p style={{backgroundColor:"orange"}}>Unhealthy</p>
      case 5:
        return <p style={{backgroundColor:"orange"}}>Very Unhealthy</p>
      case 6:
        return <p style={{backgroundColor:"lightred"}}>Hazardous</p>
      default:
        return "Nan"
    }
  }

  function GbDefraStandard(value){
    if(value>=1 && value<=3){
      return <p style={{backgroundColor:"lightgreen" }}>Low</p>
    }
    else if (value>3 && value<=6){
      return <p style={{backgroundColor:"Orange"}}>Moderate</p>
    }
    else if(value>6 && value<10){
      return <p style={{backgroundColor:"red"}}>High</p>
    }
    else{
      return <p style={{backgroundColor:"purple"  }}>Very High </p>
    }
  }
 

  return (
    <div className="CurrentWeather">
      <h2>
          {location?.name}/{location?.region}/{location?.country}
        </h2>
       
      <div className="currentDetails">
      
       <div className="infoLeft">
        <div className="icon_manage">
          <h2>Weather Report</h2>
          <hr/>
          <h1>{temp_c} °C</h1>
          <hr/>
          <img src={current?.condition?.icon} alt="nan" />
        </div>
          <hr/>
        <p>Last Updated : {last_updated}</p>
        <p>Status : {current?.condition?.text}</p>
        <p>Temperature: {temp_c} °C / {temp_f} °F</p>
        <p>Humidity : {humidity} gm<sup>-3</sup></p>
        <p>Wind Degree : {wind_degree} degree</p>
        <p>Wind Direction : {wind_dir}</p>
        <p>Wind speed : {wind_kph} Km/h</p>
        <p>Pressure : {pressure_mb} Milibar</p>
        <p>Day/Night : {is_day?"Hey its Day":"Hey its Night"}</p>  
        </div>

        <div className="infoRight">
          <h2>Air Quality </h2>
          <hr/>
          <p>Carbon Monoxide (CO) : {Math.round(airQuality?.co)} μg/m<sup>3</sup></p>
          <p>Nitrogen Dioxide (NO<sub>2</sub>) : {Math.round(airQuality?.no2)} μg/m<sup>3</sup></p>
          <p>Ozone (O<sub>3</sub>) : {Math.round(airQuality?.o3)} μg/m<sup>3</sup></p>
          <p>Particular Matter (PM 2.5) : {Math.round(airQuality.pm2_5)} μg/m<sup>3</sup></p>
          <p>Particular Matter (PM 10) : {Math.round(airQuality?.pm10)} μg/m<sup>3</sup></p>
          <p>Sulphur Dioxide (SO<sub>2</sub>) : {Math.round(airQuality?.so2)} μg/m<sup>3</sup></p>
          <div className="airStatus">
          Us-epa-index : ({airQuality['us-epa-index']}) {EpaStandard(airQuality['us-epa-index'])}
          <hr/>
          Gb Defra Index : ({airQuality['gb-defra-index']}){GbDefraStandard(airQuality['gb-defra-index'])}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
