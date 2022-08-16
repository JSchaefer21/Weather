import { useState, useEffect } from 'react'
import '../styles/Weather.sass'
import sunset from '../sunset.png'
import sunrise from '../sunrise.png'


function App(props) {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    setWeather(props.weather)
  }, [props])

  return (
    <div className='Weather'>
      
      {weather &&  <div className='Weather__container'>
        <div className='Weather__header'>
          <p className='weather-name'>{weather.name}</p>
{/*           <div className='Weather__header-des'> */}
            <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
{/*             <p className='weather-data-info2'>{weather.weather[0].description}</p>
          </div> */}
        </div>
        
        <div className='Weather__temp'>
          <p className='weather-data-main'>{weather.main.temp.toFixed(1)}ºC</p>
          <div className='Weather__temp-detail'>
            <p className='weather-data-info'>min: {weather.main.temp_min.toFixed(1)}ºC</p>
            <p className='weather-data-info'>max: {weather.main.temp_max.toFixed(1)}ºC</p>
          </div>
        </div>

        <div className='Weather__suntime-container'>
          <div className='Weather__suntime'>
            <img className='image-sun' src={sunrise} alt=''/>
            <p>{weather.sys.sunrise.toLocaleTimeString()}</p>
          </div>
          <div className='Weather__suntime'>
            <img className='image-sun' src={sunset} alt=''/>
            <p>{weather.sys.sunset.toLocaleTimeString()}</p>
          </div>
        </div>

        {/* <p className='weather-data-info'>Wind speed: {weather.wind.speed} m/s</p> */}
        
        {/* <p className='weather-data-info'>feels like {weather.main.feels_like}ºC</p>
        <p>{weather.weather[0].main}</p> */}

      </div> }

    </div>
  )
}

export default App
