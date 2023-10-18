// weatherService.js

// Example function to fetch weather data for a specific location
export async function getWeatherData(location) {
    try {
      // Make an API request to fetch weather data for the specified location
      const response = await fetch(`/api/weather?location=${location}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Failed to fetch weather data');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Example function to handle weather forecasts
  export async function getWeatherForecast(location, date) {
    try {
      // Make an API request to fetch weather forecast data for a specific location and date
      const response = await fetch(`/api/weather/forecast?location=${location}&date=${date}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Failed to fetch weather forecast data');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Add more weather-related functions as needed for your project
  