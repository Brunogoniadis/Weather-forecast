import React, { useState, useEffect } from 'react'
import { MainScreen } from './styles'
import FormCitys from '../src/components/FormCitys/FormCitys'
import RegionComponent from './components/region/RegionComponent'
import fetchApi from './services/fetchApi';

function App() {

  return (



    <MainScreen>
      <div className="main-content">
        <h1>
          Weather forecast
        </h1>
        <div className="regions-wrapper">
          <RegionComponent lat={-22.8808} long={-43.1043} id={1} />
          <RegionComponent lat={-23.5489} long={-46.6388} id={2} />
          <RegionComponent lat={-9.66625} long={-35.7351} id={3} />
          <RegionComponent lat={-11.409874} long={-41.280857} id={4} />
        </div>
      </div>
      <FormCitys>


      </FormCitys>
    </MainScreen>
  )
}

export default App


