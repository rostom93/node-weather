const request = require('request');
const argv = require('yargs').argv; 



let apiKey = 'a5e4ee94425165fe38b858632d54ce67';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
  let message = `It's ${weather.main.temp} degrees in
    ${weather.name}!`;
console.log(message);
  }
  
});



