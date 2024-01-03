import { useState } from 'react'

import { MainScreen } from './styles'
import RegionComponent from './components/region/RegionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
      <MainScreen>
        <div className="main-content">
          <h1>
            Weather forecast
          </h1>
          <div className="regions-wrapper">
            <RegionComponent  />
            <RegionComponent />
            <RegionComponent />
            <RegionComponent />
          </div>
        </div>
      </MainScreen>
  )
}

export default App
