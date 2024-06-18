const austinButton = document.querySelector('.austin-btn');
const chicagoButton = document.querySelector('.chicago-btn');
const newYorkButton = document.querySelector('.new-york-btn');
const losAngelesButton = document.querySelector('.los-angeles-btn');
const apiKey = "e76490f65af6c389f2699ef325c6e557"

//Get 5 day weather for austin
const getAustinWeather = function () {
    const apiUrl = `api.openweathermap.org/data/2.5/forecast?lat={30.2672}&lon={97.7431}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos();
          });
        } else {
          alert(`Error:${response.statusText}`);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });
  };



  austinButton.addEventListener('click', );
  chicagoButton.addEventListener('click', );
  newYorkButton.addEventListener('click', );
  losAngelesButton.addEventListener('click', );
