import { useState, useEffect } from 'react'
import '../styles/Weather.sass'


function App(props) {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    setWeather(props.weather)
  }, [props])

  return (
    <div className='Weather'>
      
      {weather &&  <div className='Weather__container'>
        <p className='weather-name'>{weather.name}</p>
        <p className='weather-data-info'>Latitude: {weather.coord.lat}</p>
        <p className='weather-data-info'>Longitude: {weather.coord.lon}</p>
        <p className='weather-data-main'>Temp: {weather.main.temp} ºC</p>
        <p className='weather-data-info'>feels like: {weather.main.feels_like} ºC</p>
        <p className='weather-data-info'>Temp min: {weather.main.temp_min} ºC</p>
        <p className='weather-data-info'>Temp max: {weather.main.temp_max} ºC</p>
        <p>Sunrise time: {weather.sys.sunrise.toLocaleTimeString()}</p>
        <p>Sunset time: {weather.sys.sunset.toLocaleTimeString()}</p>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <p>{weather.weather[0].description}</p>
        <p>{weather.weather[0].main}</p>
        <p className='weather-data-info'>Wind speed: {weather.wind.speed} m/s</p>
      </div> }

    </div>
  )
}

export default App
