export default function handleSubmit(event) {
    event.preventDefault()
    
    const city = document.getElementById('input-city').value //city
    const startDate = document.getElementById('input-start-date').value //start date
    const endDate = document.getElementById('input-end-date').value //end date

    const placeName = document.getElementById('placeName')
    const country = document.getElementById('country') //country
    const latitude = document.getElementById('latitude') //latitude
    const longitude = document.getElementById('longitude') //latitude

    const weather = document.getElementById('weather') //weather
    const weatherIcon = document.getElementById('icon') //weather icon
    const pixImg = document.getElementById('img') //city image

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/destinations', 
    {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({destination: city})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)

        //add response in the html
        country.textContent = res.country
        placeName.textContent = res.cityname
        latitude.textContent = res.lat
        longitude.textContent = res.long
        weather.textContent = `${res.temp} °C`
        weatherIcon.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${res.weather.icon}.png"/>`
        pixImg.src = res.photo
    })
}