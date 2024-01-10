import React, { useState } from 'react';
import { MainContainer } from './style';

// ... (imports e estilos)

function SideForm({ onSubmitForm }) {
    const [formData, setFormData] = useState({
        city1: { lat: '', long: '' },
        city2: { lat: '', long: '' },
        city3: { lat: '', long: '' },
        city4: { lat: '', long: '' }
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
            onSubmitForm(formData); // Chamando a função de retorno de chamada com os dados do formulário
        } else {
            alert('Preencha todos os campos antes de enviar.');
        }
    };

    return (
        <MainContainer>
            <form className="form-citys" onSubmit={handleSubmit}>
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

