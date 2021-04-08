var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express()

const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

//Geonames API
app.post('/travel', (req, res) => {
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${destination}&username=${process.env.GEONAMES_USERNAME}&maxRows=1`
    axios.post(geonamesURL)
        .then(response => res.send(response.data))    
})
