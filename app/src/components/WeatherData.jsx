import { useState, useEffect } from 'react'
import '../styles/Weather.sass'
import sunset from '../sunset.png'
import sunrise from '../sunrise.png'
import wind from '../wind.png'


function App(props) {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    setWeather(props.weather)
  }, [props])

  return (
    <div className='Weather'>
      
      {weather && <div className='Weather__container'>
        <p className='weather-day'>{weather.sys.sunrise.toLocaleDateString()}</p>
        <div className='Weather__header'>
          <p className='weather-name'>{weather.name}</p>
            <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        </div>
        
        <div className='Weather__temp'>
          <p className='weather-data-main'>{weather.main.temp.toFixed(1)}ºC</p>
          <div className='Weather__temp-detail'>
            <p className='weather-data-info'>min: {weather.main.temp_min.toFixed(1)}ºC</p>
            <p className='weather-data-info'>max: {weather.main.temp_max.toFixed(1)}ºC</p>
          </div>
        </div>

        <div className='Weather__data'>
          {/* <p className='weather-data-info2'>{weather.weather[0].description}</p> */}
          <div className='Weather__suntime'>
            <p className='weather-data-info2'>Humidity:</p>
            <p className='weather-data-info3'>{weather.main.humidity}%</p>
          </div>
          <div className='Weather__suntime'>
            <p className='weather-data-info2'>Pressure:</p>
            <p className='weather-data-info3'>{weather.main.pressure} hPa</p>
          </div>
          <div className='Weather__suntime'>
            <p className='weather-data-info2'>Wind speed: </p>
            <p className='weather-data-info3'>{weather.wind.speed} m/s</p>
            <p/>
            <img style={{rotate: `${weather.wind.deg}deg` }} className='image-wind' src={wind} alt=''/>
          </div>
        </div>

        <div className='Weather__suntime-container'>
          <div className='Weather__suntime'>
            <img className='image-sun' src={sunrise} alt=''/>
            <p className='weather-data-info3'>{weather.sys.sunrise.toLocaleTimeString('es-ES', { hour: '2-digit', minute:'2-digit' })}</p>
          </div>
          <div className='Weather__suntime'>
            <img className='image-sun' src={sunset} alt=''/>
            <p className='weather-data-info3'>{weather.sys.sunset.toLocaleTimeString('es-ES', { hour: '2-digit', minute:'2-digit' })}</p>
          </div>
        </div>

      </div> }

    </div>
  )
}

export default App
