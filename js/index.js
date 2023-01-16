/* jslint node:true */ 

'use strict'; 


/* global alert */





async function getWeatherInfo() {

try {
const response = await fetch('../weather.json')
return await response.json()

//.then((response) => response.json())
//.then((data) => console.log(data));

} catch (error) {
    console.error(error)
}




}



let allWeather = document.querySelectorAll('button')

allWeather.forEach(element => {
    element.addEventListener('click', weatherInfo)
})



let weatherData = {}
getWeatherInfo().then(data => weatherData = data)

console.log(weatherData)


function weatherInfo(event) {
    let weatherChoice = weatherData.weather.find(someweather => {
        return event.target.id === someweather.theweather.toLowerCase()
    })
    console.log(weatherChoice) 



const weather = {
    stem: `${weatherChoice.theweather}`, 
    display: () => {
        document.querySelector('#stem').textContent = weather.stem
    }
}


document.querySelector('#searchButton').addEventListener('click', () => weather.check(1) )

weather.display()

}