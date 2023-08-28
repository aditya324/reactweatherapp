import React, { useState } from 'react'
import './weatherapp.css'
import search_icon from '../Asset/search.png'
import clear_icon from '../Asset/clear.png'
import drizzle_icon from '../Asset/drizzle.png'
import humidity_icon from '../Asset/humidity.png'
import rain_icon from '../Asset/rain.png'
import snow_icon from '../Asset/snow.png'
import wind_icon from '../Asset/wind.png'
import cloud_icon from '../Asset/cloud.png'

const WeatherApp = () => {

  let api_key="e4d25c050fab1d6b24580490428b1195";
  const[wicon,setwicon]=useState (cloud_icon);
  const search= async ()=>{
    const element=document.getElementsByClassName("cityinput")
    if(element[0].value===""){
      return 0;
  }
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
  
  let response= await fetch(url);
  console.log(response);
  let data=await response.json();
  console.log(data);
  const humidity=document.getElementsByClassName("humidity-percent")
  const wind=document.getElementsByClassName("wind-rate")
  const tempature=document.getElementsByClassName("weather-tempature")
  const location =document.getElementsByClassName("weather-location")

  humidity[0].innerHTML=data.main.humidity+"%";
  wind[0].innerHTML=Math.floor(data.wind.speed) +"km/h";
  tempature[0].innerHTML=Math.floor(data.main.temp)+"°c";
  location[0].innerHTML=data.name;

  if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
    setwicon(clear_icon)
  }
  else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
    setwicon(cloud_icon)
  }
  else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
    setwicon(drizzle_icon)
  }
  else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
    setwicon(drizzle_icon)
  }
  else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
    setwicon(rain_icon)
  }
  else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
    setwicon(rain_icon)
  }
  else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
    setwicon(snow_icon)
  }
  else{
    setwicon(clear_icon);
  }




}
  return (
    <div className='container'>
    <div className="top-bar">
      <input type="text" className='cityinput' placeholder='search' />
      <div className="search-icon" onClick={search}>
        <img src={search_icon} alt="" />
      </div> 
    </div>
    <div className="weather-image">
      <img src={wicon} alt="" />
    </div>
    <div className="weather-tempature">
      24°c
    </div>
    <div className="weather-location">London</div>
    <div className="data-container">
      <div className="element">
        <img src={humidity_icon} alt="" />
        <div className="data">
          <div className="humidity-percent">64%</div>
          <div className="text">humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={wind_icon} alt="" />
        <div className="data">
          <div className="wind-rate">18kmph</div>
          <div className="text">windspeed</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WeatherApp
