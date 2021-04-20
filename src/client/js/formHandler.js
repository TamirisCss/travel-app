export default function handleSubmit(event) {
    event.preventDefault()

    
        const destination = document.getElementById('input-destination').value //city

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/destinations', 
    {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({destination: destination})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        //add response in the html
    })
}