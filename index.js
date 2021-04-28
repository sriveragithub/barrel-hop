require('dotenv').config()
const express = require('express')
const fetch = require('node-fetch')
const path = require('path')
const PORT = process.env.PORT || 5000
const WEATHER_KEY =  process.env.WEATHER_SECRET_API
const unsplashKey =  process.env.UNSPLASH_API

console.log(WEATHER_KEY)
console.log(unsplashKey)


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/weather/city/:city', async (req, res) => {
    // console.log(req.params)
    const citySearch = req.params.city
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${WEATHER_KEY}&units=imperial`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data
      })
    res.send(weatherData)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
