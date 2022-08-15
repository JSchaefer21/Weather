const axios = require('axios')
//const { env: {REACT_APP_WEATHER_KEY}} = process
//const { validatePosition } = require('validators')

function retrieveWeather(city, latitude, longitude) {
  //validatePosition([latitude, longitude])

if(city) {
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    .then(res => {
      if(res.status === 200){
          const data = res.data
          return data
      }
    })
    .catch(error => {
      throw new Error(`Temperature not found`)
    });
}

else if (city===null && latitude && longitude) {
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    .then(res => {
      if(res.status === 200){
          const data = res.data
          return data
      }
    })
    .catch(error => {
      throw new Error(`Temperature not found`)
    });
}

}

module.exports = retrieveWeather
