import axios from 'axios';

const fetchApi = async (lat, long) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: lat,
        lon: long,
        appid: '1922ec027bc8ed5184d84213b69a2646',
        lang: 'eng',
        units: 'metric',
      },
    });
    console.log("return", response)
    return { data: response.data, isFetching: false };
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return { data: null, isFetching: false };
  }
};

export default fetchApi;