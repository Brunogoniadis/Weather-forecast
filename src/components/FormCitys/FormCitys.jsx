import React from 'react';
import { MainContainer } from './style';

function FormCitys() {

    return (
        <MainContainer>
            <form className="form-citys">
                <div className="column">
                    {/* Coluna para lat */}
                    <div className="input-group">
                        <label>Lat 1:</label>
                        <input />
                    </div>
                    <div className="input-group">
                        <label>Lat 2:</label>
                        <input/>
                    </div>
                    <div className="input-group">
                        <label>Lat 3:</label>
                        <input />
                    </div>
                    <div className="input-group">
                        <label>Lat 4:</label>
                        <input  />
                    </div>
                </div>

                <div className="column">
                    <div className="input-group">
                        <label>Long 1:</label>
                        <input/>
                    </div>
                    <div className="input-group">
                        <label>Long 2:</label>
                        <input />
                    </div>
                    <div className="input-group">
                        <label>Long 3:</label>
                        <input/>
                    </div>
                    <div className="input-group">
                        <label>Long 4:</label>
                        <input />
                    </div>
                </div>

                <button className='submit' type="submit">Submit</button>
            </form>
        </MainContainer>
    );
}

export default FormCitys;
