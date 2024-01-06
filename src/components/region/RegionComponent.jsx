import React, { useState, useEffect } from 'react'
import { Region } from './styles'
import fetchApi from '../../services/fetchApi'


function RegionComponent(props) {

    const [weatherData, setWeatherData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchApi(-22.8808, -43.1043);
                setWeatherData(result.data);
                setIsFetching(false);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                setIsFetching(false);
            }
        };

        fetchData();
    }, []);


    console.log(weatherData)



    return (
        <Region>
            <div className='name-container'>
                REGION
            </div>
            <div className='center-container'>
                <img className='icon-type'
                    src="https://c.animaapp.com/HLTE2lsN/img/storm-2@2x.png"
                />
                <div className="temps-wrapper">
                    <div className='temp-container'>
                        <div className='text-container-1'>
                            Min
                        </div>
                        <div className='text-container-2'>
                            36°
                        </div>
                    </div>
                    <div className='temp-container'>
                        <div className='text-container-1'>
                            Max
                        </div>
                        <div className='text-container-2'>
                            36°
                        </div>
                    </div>
                </div>
            </div>
            <div className='spec-container'>
                33 mm
            </div>
        </Region>
    )
}

export default RegionComponent