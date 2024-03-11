//Ma clé API du site openweathermap
const APIKEY = "a624fe8063bf9ec3dc002240c8174454";


//Fonction pour effectuer la requête API
function fetchWeatherData(){

// Ici il faut changer Bordeaux par la ville souhaitée
let url = `https://api.openweathermap.org/data/2.5/weather?q=Bordeaux&appid=${APIKEY}&units=metric&lang=fr`;

//On récupère les valeurs de l'api au format json + ajout dans l'html
fetch(url).then((response) => response.json().then((data) => {
     console.log(data);
     document.querySelector('#city').innerHTML = data.name;
     document.querySelector('#temp').innerHTML = data.main.temp + '°';  
    })
)
.catch((err) => console.log('Erreur : ' + err));
}

//1er appel de notre fonction au chargement de la page
fetchWeatherData();

//Nouvelle requête toutes les heures
setInterval(fetchWeatherData, 3600000); // 3600000 ms = 1 heure