import { useState } from 'react'
import retrieveWeather from '../logic/retrieveWeather'
import Box from './Box'
import WeatherData from './WeatherData'
import Map from './Map'
import '../styles/App.sass'


function App() {

  const [weather, setWeather] = useState(null)
  const [map, setMap] = useState(false)

  const handleCitySelected = async(city) => {
    setWeather(await retrieveWeather(city, null, null))
  }

  const handleMap = () => {
    if(map)
      setMap(false)
    else
      setMap(true)
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault()
    const result = await retrieveWeather(event.target.city.value, null, null)
    setWeather(result)
  }
  
  const handleLocation = async() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      /* 
      ojo con la asincronia, pendiente repasar o ejecutar por sepaarado
      
      const result = await retrieveWeather(null, position.coords.latitude, position.coords.longitude)
      setWeather(result) */
    }, function(error){
      console.log('Position error')
    }, { maximumAge: 400_000 })
  }

  return (
    <div className="App">

      {!weather && <Box onCitySelected={handleCitySelected}/> }
      
      <header>
        <form className='Header__form' onSubmit={handleFormSubmit}>
          <input type="text" name="city" placeholder=" City"/>
          <button className='Header__form-button'>Search</button>
        </form>

        <button className='Header__location-button' onClick={handleLocation}>Set Location</button>
      </header>


      <main className={map? 'main-reduced':'main-complete'}>
        { weather && <WeatherData weather={weather}/> }
      </main>


      <button className={map?'map-button map-show':'map-button map-hide'} onClick={handleMap}>{map? 'Hide map' : 'Show map'}</button>
      { map && <footer>
        { weather && <Map position={[weather.coord.lat,weather.coord.lon]}/>}
      </footer> }

    </div>
  )
}

export default App
