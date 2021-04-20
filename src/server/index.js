var path = require('path')
const axios = require('axios');
const express = require('express')

const app = express()

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
})

//reads from Geonames, weatherbit and pixabay APIs
app.post('/destinations', async (req, res) => {
    try {
        const geonamesURL = `http://api.geonames.org/searchJSON?q=${req.body.destination}&username=${process.env.GEONAMES_USERNAME}&maxRows=1`
        const geonamesResponse = await axios.post(geonamesURL)
        const geonamesData = geonamesResponse.data.geonames[0]
        let destination = {}
        destination.lat = geonamesData.lat
        destination.long = geonamesData.lng
        destination.country = geonamesData.countryName
        destination.cityname = geonamesData.name

        const weatherUrl = `https://api.weatherbit.io/v2.0/current?lat=${destination.lat}&lon=${destination.long}&key=${process.env.WEATHERBIT_KEY}`;
        const weatherResponse = await axios.post(weatherUrl)
        const weatherData = weatherResponse.data.data[0]

        destination.temp = weatherData.temp
        //icon and description
        destination.weather = weatherData.weather

        const pixUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.destination}&image_type=photo&per_page=3`;
        console.log(pixUrl)
        const pixResponse = await axios.post(pixUrl)
        const pixData = pixResponse.data.hits[0]

        destination.photo = pixData.webformatURL
        
        console.log(destination)
        res.send(destination)
    } catch (error) {
        console.log("Error", error);
    } 
});
