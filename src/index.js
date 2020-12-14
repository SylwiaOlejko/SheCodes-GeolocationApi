function showTemperature( response){

console.log(response.data.main.temp);
let temperature = Math.round(response.data.main.temp);

let heading= document.querySelector("h1");
heading.innerHtml ='The outside is ${temperature}C';


}


function reteirvePosition(position){

let latitude = position.coords.latitude;
let longitude = position.coords.latitude;
let apiKey = "4a4fe35e6c00e25f675f5b029f252096";
let units = "metric";
let apiEndpoint = "http://api.openweathermap.org/data/2.5/weather ";

let apiUrl = '${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}';

axios.get(apiUrl).then(showTemperature);

}
navigator.geolocation.getCurrentPosition(reteirvePosition);
