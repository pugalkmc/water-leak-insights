import { useContext } from 'react';
import { WeatherDataContext } from '../context/WeatherDataContext'; // Replace with the correct path to your WeatherDataContext

const useWeatherData = () => {
  const { weatherData, updateWeatherData } = useContext(WeatherDataContext);

  return {
    weatherData,
    updateWeatherData,
  };
};

export default useWeatherData;
