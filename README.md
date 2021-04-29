# Barrel Hop - Where is your next adventure?

What is the project? - Barrel Hop is a brewery search app created to allow users to do a quick search of breweries in their local area and get an idea of weather in that area. This project is built with Javascript, Express and hosted on Heroku using Heroku CLI. The search is done utilizing multiple fetches throughout the app. .ENV is utilized in a node-fetch in an express route to ping an API that requires a API key. This data is then fetched within the static JS file.

What is the MVP? - The minimum viable product for this app is to have an API driven app that can successfully ping and show brewery and weather data based on search parameters.

What are the nice to haves? -  The nice to haves for this project would be more complete styling and branding for the website as a whole and error handlers for when a website is not linkable.

When will the project be complete? - The project will be complete once all the MVP features have been implemented and basic styling has been applied. This project was completed in March 2020 and has since been updated to work as a Express SPA app.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/sriveragithub/barrel-hop.git # or clone your own fork
$ cd barrel-hop
$ npm install
$ npm run dev
```
