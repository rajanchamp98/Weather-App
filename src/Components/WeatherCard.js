import React from 'react'
import '../Styling/WeatherCard.style.css'

function WeatherCard({Status,date,img_url,temp_data,astro}) {
  const {sunrise,sunset,moonrise,moonset}=astro
  const {maxtemp_c,mintemp_c,maxtemp_f,mintemp_f,avghumidity,maxwind_kph,avgtemp_c}=temp_data;
  return (
    <div className='WeatherCard'>
        <div className="imageContainer">
            <img src={img_url} alt="" />
            <h1>{avgtemp_c} °C</h1>
        </div>
        <div className="detailsContainer">
            
            <p>Date:-{date}</p>
            <p>Max Temperature :   {maxtemp_c} °C / {maxtemp_f} °F </p>
            <p>Min Temperature :   {mintemp_c} °C / {mintemp_f} °F</p>
            <p>Status:- {Status}</p>
            <p>Max Wind Speed:-{maxwind_kph} Km/h</p>
            <p>Humidity:-{avghumidity} gm<sup>-3</sup></p>
            <p>Sun Rise Time : {sunrise}</p>
            <p>Sun Set Time : {sunset}</p>
            <p>Moon Rise Time : {moonrise}</p>
            <p>Moon Set TIme : {moonset}</p>
        </div>


    </div>
  )
}

export default WeatherCard