import React, { useState } from 'react';
import { MainScreen } from './styles';
import SideForm from './components/sideForm/sideForm';
import RegionComponent from './components/region/RegionComponent';
import PrevIcon from './assets/prevIcon.png';


function App() {
  const [formData, setFormData] = useState({
    city1: { lat: '', long: '' },
    city2: { lat: '', long: '' },
    city3: { lat: '', long: '' },
    city4: { lat: '', long: '' },
  });

  const [forceUpdate, setForceUpdate] = useState(false);

  const handleFormSubmit = (newFormData) => {
    setFormData(newFormData);
    

    setForceUpdate((prev) => !prev);
  };

  return (
    <MainScreen>
      <div className="main-content">
        <div className='title-container'>
          <button

            className='icon' onClick={() => setForceUpdate((prev) => !prev)}>

          </button>
          <h1>Weather forecast</h1>
        </div>
        <div className="regions-wrapper">
          <RegionComponent key={`region-1-${formData.city1.lat}-${formData.city1.long}-${forceUpdate}`} lat={formData.city1.lat} long={formData.city1.long} id={1} />
          <RegionComponent key={`region-2-${formData.city2.lat}-${formData.city2.long}-${forceUpdate}`} lat={formData.city2.lat} long={formData.city2.long} id={2} />
          <RegionComponent key={`region-3-${formData.city3.lat}-${formData.city3.long}-${forceUpdate}`} lat={formData.city3.lat} long={formData.city3.long} id={3} />
          <RegionComponent key={`region-4-${formData.city4.lat}-${formData.city4.long}-${forceUpdate}`} lat={formData.city4.lat} long={formData.city4.long} id={4} />
        </div>
      </div>
      <SideForm onSubmitForm={handleFormSubmit} />
    </MainScreen>
  );
}

export default App;