export default function handleSubmit(event) {
    event.preventDefault()
    
    const city = document.getElementById('input-city').value
    const startDate = new Date(document.getElementById('input-start-date').value);
    const endDate = new Date(document.getElementById('input-end-date').value);

    const placeName = document.getElementById('placeName')
    const country = document.getElementById('country') //country
    const latitude = document.getElementById('latitude') //latitude
    const longitude = document.getElementById('longitude') //latitude

    const weather = document.getElementById('weather') //weather
    const weatherIcon = document.getElementById('icon') //weather icon
    const pixImg = document.getElementById('img') //city image
    const countdown = document.getElementById('countdown') //countdown
    const duration = document.getElementById('duration') //duration 

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
        countdown.textContent = getCountdown(startDate) + ' Days to go!'
        duration.textContent = getDuration(startDate, endDate) + ' Day trip.'
    })
}

const getCountdown = (startDate) => {
    return Math.ceil( (startDate - new Date()) / 8.64e7);
}

const getDuration = (startDate, endDate) => {
    return (endDate.getTime() - startDate.getTime()) / 8.64e7
}

export { handleSubmit, getCountdown, getDuration}