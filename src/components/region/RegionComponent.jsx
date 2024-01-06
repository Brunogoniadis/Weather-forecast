import React, { useState, useEffect } from 'react';
import { Region, IsLoadRegion} from './styles';
import fetchApi from '../../services/fetchApi';

function RegionComponent(props) {
    const [weatherData, setWeatherData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchApi(props.lat, props.long);
                setWeatherData(result.data);
                setIsFetching(false);



                setTimeout(() => {
                    setShouldRender(true);
                }, (props.id * 250));
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                setIsFetching(false);
            }
        };

        fetchData();
    }, [props.lat, props.long]);

    console.log(props);

    const formatTemp = (temp) => {
        const tempString = temp?.toString();
        return tempString?.length > 2 ? tempString.slice(0, 2) : tempString;
    };

    return (
        <>
            {shouldRender ? (
                <Region>
                    <div className='name-container'>{weatherData?.name}</div>
                    <div className='center-container'>
                        <img
                            className='icon-type'
                            src='https://c.animaapp.com/HLTE2lsN/img/storm-2@2x.png'
                            alt='Weather Icon'
                        />
                        <div className='temps-wrapper'>
                            <div className='temp-container'>
                                <div className='text-container-1'>Min</div>
                                <div className='text-container-2'>{formatTemp(weatherData?.main.temp_min)}</div>
                            </div>
                            <div className='temp-container'>
                                <div className='text-container-1'>Max</div>
                                <div className='text-container-2'>{formatTemp(weatherData?.main.temp_max)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='spec-container'>{weatherData?.main.humidity} hum</div>
                </Region>
            ) : (
                
                <IsLoadRegion/>
            )}
        </>
    );
}

export default RegionComponent;
