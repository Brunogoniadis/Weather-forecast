import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const weatherApiKey = "1922ec027bc8ed5184d84213b69a2646";
  const weatherAxiosInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await weatherAxiosInstance.get('/weather', {
          params: {
            lat: -12.345,  // Substitua pelas coordenadas desejadas
            lon: 45.678,   // Substitua pelas coordenadas desejadas
            appid: weatherApiKey,
            lang: 'pt',
            units: 'metric',
          }
        });
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();  // Chame a função fetchData dentro do useEffect

  }, []); // Certifique-se de fornecer as dependências apropriadas para evitar chamadas desnecessárias

  return { weatherData, isFetching, error };
};

export default useWeatherApi;
