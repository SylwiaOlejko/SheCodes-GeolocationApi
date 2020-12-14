function reteirvePosition(position){

let latitude = position.coords.latitude;
let longitude = position.coords.latitude;
let apiKey = "4a4fe35e6c00e25f675f5b029f252096";
let units = "metric";


let apiUrl = 'http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}';
console.log(apiUrl);
}
navigator.geolocation.getCurrentPosition(reteirvePosition);
