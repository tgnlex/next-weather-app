"use client"
import React, {useState} from 'react';
import {Search} from "../../components/Search";
import { WeatherForecast } from "../../components/weatherForecast";
import {
  CurrentWeather as CurrentWeatherType,
  Forecast,
} from "../../models/weatherMod"
import { fetchWeatherData } from "../../services/weatherSvc"
const SearchPage: React.FC = () => {
  const [forecast, setForecast] = useState<Forecast[] | null>(null);
    
  const handleSearch = async ( city: string ) => {
    try {
      const { forecast } = await fetchWeatherData(city);
      setForecast(forecast);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch}/>
      {forecast && <WeatherForecast forecast={forecast}/>}
    </div>
  );
};

export default SearchPage;