import { QueryClient, useQuery } from 'react-query'; 

import axios from 'axios';
import { useState } from 'react';

export const queryClient = new QueryClient();

const fetchApi = () => {
  const [count, setCount] = useState(0);

  const { data, isFetching } = useQuery('temps', async () => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: -12.345,
        lon: 45.678,
        appid: '1922ec027bc8ed5184d84213b69a2646',
        lang: 'pt',
        units: 'metric',
      }
    });

    return response.data;
  });

  return { data, isFetching, count, setCount };
};

export default fetchApi;
