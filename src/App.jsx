import { MainScreen } from './styles'
import RegionComponent from './components/region/RegionComponent'
import fetchApi from './services/fetchApi';

function App() {
  const { data, isFetching, count, setCount } = fetchApi();

  console.log('data', data)

  return (



    <MainScreen>
      <div className="main-content">
        <h1>
          Weather forecast
        </h1>
        <div className="regions-wrapper">
          <RegionComponent />
          <RegionComponent />
          <RegionComponent />
          <RegionComponent />
        </div>
      </div>
    </MainScreen>
  )
}

export default App
