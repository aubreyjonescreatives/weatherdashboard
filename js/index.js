/* jslint node:true */ 

'use strict'; 


/* global alert */





async function getWeatherInfo() {

try {
const response = await fetch('../weatherList.json')
console.log(response)
return await response.json()


//.then((response) => response.json())
//.then((data) => console.log(data));

} catch (error) {
    console.error(error)
}




}



let allWeather = document.querySelectorAll('button')
console.log(allWeather)

allWeather.forEach(element => {
    element.addEventListener('click', weatherInfo)
})



let weatherData = {}
getWeatherInfo().then(data => weatherData = data)

console.log(weatherData)


function weatherInfo(event) {
    let weatherChoice = weatherData.weatherItems.find(weatherList => {
        return event.target.id === weatherList.theweather.toLowerCase()
    })
    console.log(weatherChoice) 



const weatherDisplay = {
    stem: `${weatherChoice.theweather}`, 
    display: () => {
        document.querySelector('#stem').textContent = weatherDisplay.stem
    }, 
    check: (userChoice) => {
        if (userChoice === weatherDisplay.stem) {
            document.querySelector('#feedback').textContent = "Longitude"
        } else 
        document.querySelector('#feedback').textContent = "Latitude"
    }
}


document.querySelector('#searchButton').addEventListener('click', () => weatherDisplay.check(1) )

weatherDisplay.display()
console.log(weatherDisplay)

}