import React, { useState, useEffect } from 'react';
import { MainContainer } from './style';

function SideForm({ onSubmitForm }) {
    const [formData, setFormData] = useState(() => {

        const storedData = JSON.parse(localStorage.getItem('formData')) || {
            city1: { lat: '', long: '' },
            city2: { lat: '', long: '' },
            city3: { lat: '', long: '' },
            city4: { lat: '', long: '' }
        };

        return storedData;
    });

    const handleInputChange = (city, field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [city]: {
                ...prevData[city],
                [field]: value
            }
        }));
    };

    useEffect(() => {

        localStorage.setItem('formData', JSON.stringify(formData));


    }, [formData]);

    const areAllFieldsFilled = () => {
        for (const city in formData) {
            if (formData[city].lat === '' || formData[city].long === '') {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (areAllFieldsFilled()) {
            onSubmitForm(formData);
        } else {
            alert('Fill in all fields before sending.');
        }
    };


    return (
        <MainContainer

            style={{
                backgroundColor: '#80a7bb',
                transform: 'translate(0vw)'
            }}
        >
            <form className="form-citys" onSubmit={handleSubmit}

                style={{
                    opacity: '1',
                    transform: 'translate(0vw)'
                }}
            >
                <div className='row-city'>
                    <p>City1</p>
                    <input
                        placeholder='lat'
                        value={formData.city1.lat}
                        onChange={(e) => handleInputChange('city1', 'lat', e.target.value)}
                    />
                    <input
                        placeholder='long'
                        value={formData.city1.long}
                        onChange={(e) => handleInputChange('city1', 'long', e.target.value)}
                    />
                </div>

                <div className='row-city'>
                    <p>City2</p>
                    <input
                        placeholder='lat'
                        value={formData.city2.lat}
                        onChange={(e) => handleInputChange('city2', 'lat', e.target.value)}
                    />
                    <input
                        placeholder='long'
                        value={formData.city2.long}
                        onChange={(e) => handleInputChange('city2', 'long', e.target.value)}
                    />
                </div>

                <div className='row-city'>
                    <p>City3</p>
                    <input
                        placeholder='lat'
                        value={formData.city3.lat}
                        onChange={(e) => handleInputChange('city3', 'lat', e.target.value)}
                    />
                    <input
                        placeholder='long'
                        value={formData.city3.long}
                        onChange={(e) => handleInputChange('city3', 'long', e.target.value)}
                    />
                </div>

                <div className='row-city'>
                    <p>City4</p>
                    <input
                        placeholder='lat'
                        value={formData.city4.lat}
                        onChange={(e) => handleInputChange('city4', 'lat', e.target.value)}
                    />
                    <input
                        placeholder='long'
                        value={formData.city4.long}
                        onChange={(e) => handleInputChange('city4', 'long', e.target.value)}
                    />
                </div>

                <button className='submit' type="submit">Submit</button>
            </form>
        </MainContainer>
    );
}

export default SideForm;
