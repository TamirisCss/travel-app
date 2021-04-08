export default function handleSubmit(event) {
    event.preventDefault()

    
        const destination = document.getElementById('input-destination').value //city

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}