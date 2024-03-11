const APIKEY = "a624fe8063bf9ec3dc002240c8174454";

// Fonction pour lire la configuration depuis conf.json
function fetchConfig() {
    return fetch('conf.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Erreur lors de la lecture de conf.json:', error);
            return null;
        });
}

// Fonction pour effectuer la requête API
function fetchWeatherData() {
    fetchConfig()
        .then(config => {
            if (!config || !config.city) {
                console.error('Configuration invalide.');
                return;
            }

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${config.city}&appid=${APIKEY}&units=metric&lang=fr`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    document.querySelector('#city').innerHTML = data.name;
                    document.querySelector('#temp').innerHTML = data.main.temp + '°';
                })
                .catch(err => console.error('Erreur : ' + err));
        });
}

// 1er appel de notre fonction au chargement de la page
fetchWeatherData();

// Nouvelle requête toutes les heures
setInterval(fetchWeatherData, 3600000); // 3600000 ms = 1 heure