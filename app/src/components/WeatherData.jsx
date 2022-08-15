import { useState } from 'react'
import '../styles/Weather.sass'


function App(props) {

  const [weather] = useState(props.weather)

  return (
    <div className='Weather'>
      
      <div className='Weather__container'>
        <p>{weather.name}</p>
        <p>Latitude: {weather.coord.lat}</p>
        <p>Longitude: {weather.coord.lon}</p>
        <p>Temp: {weather.main.temp} ºC</p>
        <p>Temp (feels like): {weather.main.feels_like} ºC</p>
        <p>Temp min: {weather.main.temp_min} ºC</p>
        <p>Temp max: {weather.main.temp_max} ºC</p>
        <p>Sunrise time: {weather.sys.sunrise}</p>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <img className='image' src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'} alt=''/>
        <p>Description: {weather.weather[0].description}</p>
        <p>Main: {weather.weather[0].main}</p>
        <p>Wind speed: {weather.wind.speed} m/s</p>
        <p>Wind deg: {weather.wind.deg} deg</p>
      </div>

    </div>
  )
}

export default App
