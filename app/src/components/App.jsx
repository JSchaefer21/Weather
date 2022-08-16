/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import retrieveWeather from '../logic/retrieveWeather'
import Box from './Box'
import WeatherData from './WeatherData'
import Map from './Map'
import '../styles/App.sass'


function App() {

  const [weather, setWeather] = useState(null)
  const [map, setMap] = useState(false)

  useEffect(() => {
    handleLocation()
  }, [])

  const handleCitySelected = async(city) => {
    setWeather(await retrieveWeather(city, null, null))
  }

  const handleMap = () => {
    if(weather) {
      if(map)
        setMap(false)
      else
        setMap(true)
    }
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault()
    setWeather(await retrieveWeather(event.target.city.value, null, null))
  }
  
  const handleLocation = async() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      handleNewLocation(position.coords.latitude, position.coords.longitude)
    }, function(error){
      console.log('Position error')
    }, { maximumAge: 400_000 })
  }
  const handleNewLocation = async(lat, lon) => {
    setWeather(await retrieveWeather(null, lat, lon))
  }

  return (
    <div className="App">

      {!weather && <Box onCitySelected={handleCitySelected}/> }
      
      <header>
        <form className='Header__form' onSubmit={handleFormSubmit}>
          <input className='Header__form-input' type="text" name="city" placeholder="City"/>
          <button className='Header__button'>Search</button>
        </form>

        <button className='Header__button Header__location' onClick={handleLocation}>Set Location</button>
      </header>


      <main className={map? 'main-reduced':'main-complete'}>
        { weather && <WeatherData weather={weather}/> }
      </main>


      <button className={map?'map-button map-show':'map-button map-hide'} onClick={handleMap}>{map? 'Hide map' : 'Show map'}</button>
      { map && weather && <footer>
        <Map position={[weather.coord.lat,weather.coord.lon]}/>
        <div className='Footer__location'>
          <p className='Footer-text'>Latitude: {weather.coord.lat}</p>
          <p className='Footer-text'>Longitude: {weather.coord.lon}</p>
        </div>
      </footer> }

    </div>
  )
}

export default App
