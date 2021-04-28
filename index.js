require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const weatherKey =  process.env.WEATHER_SECRET_API
const unsplashKey =  process.env.UNSPLASH_API

console.log(process.env)
console.log(weatherKey)
console.log(unsplashKey)


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {
      weather: weatherKey,
      unsplash: unsplashKey
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
