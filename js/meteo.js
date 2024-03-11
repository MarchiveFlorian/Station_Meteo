const APIKEY = "a624fe8063bf9ec3dc002240c8174454";

let url = `https://api.openweathermap.org/data/2.5/weather?q=Bordeaux&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) => response.json().then((data) => {
     console.log(data);
     document.querySelector('#city').innerHTML = data.name;
     document.querySelector('#temp').innerHTML = data.main.temp + '°';  
    })
)
.catch((err) => console.log('Erreur : ' + err));