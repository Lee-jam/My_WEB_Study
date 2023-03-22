// 38e86f0e539257fe1dde4d32b1aa2281
const weather = document.querySelector('#weather span:first-child')
const city = document.querySelector('#weather span:last-child')
const API_KEY = '38e86f0e539257fe1dde4d32b1aa2281';

navigator.geolocation.getCurrentPosition(geoOk,geoErr);

function geoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

   fetch(url).then((res)=>res.json())
   .then((data)=>{
    console.log(data)
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}/${data.main.temp}`
})
}
function geoErr(){
    alert("")
}

// geoOk();
