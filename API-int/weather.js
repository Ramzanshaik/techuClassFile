const box = document.querySelector(".box")
const input = document.querySelector("input")

function fetchweatherData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3f10df4d37b9c14f3a1c05d9e1bf17b8&units=metric`)
    .then(res => res.json())
    .then(data => {

        showTemperature(data)
    })
}


function showTemperature(temp){
    const head = document.createElement("h1")
    head.innerHTML = `temperature ${temp.main.temp}`

    box.appendChild(head)
    input.value = ''
}


