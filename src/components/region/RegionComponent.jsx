import React from 'react'
import { Region } from './styles'

function RegionComponent() {
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
                        <div className='text-conteiner-1'>
                            Min
                        </div>
                        <div className='text-conteiner-2'>
                            36°
                        </div>
                    </div>
                    <div className='temp-container'>
                        <div className='text-conteiner-1'>
                            Max
                        </div>
                        <div className='text-conteiner-2'>
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