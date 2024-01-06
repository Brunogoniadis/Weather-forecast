import React, { useState, useEffect } from 'react'
import { MainScreen } from './styles'
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
          <RegionComponent lat={-22.8808} long={-43.1043} />
          <RegionComponent lat={-22.9221382} long={-43.3406402}/>
          <RegionComponent lat={-9.5416924} long={-35.8512309}/>
          <RegionComponent lat={-12.6684295} long={-61.5274824}/>
        </div>
      </div>
    </MainScreen>
  )
}

export default App
