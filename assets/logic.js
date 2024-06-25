const austinButton = document.querySelector('.austin-btn');
const chicagoButton = document.querySelector('.chicago-btn');
const newYorkButton = document.querySelector('.new-york-btn');
const losAngelesButton = document.querySelector('.los-angeles-btn');
const apiKey = "e76490f65af6c389f2699ef325c6e557"

//Get 5 day weather for austin
const getAustinWeather = function () {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=30.2672&lon=-97.7431&appid=${apiKey}`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayAustin(data.list);
                    //console.log(data.list)
                });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
const displayAustin = function (data) {
    const austinWeatherDate0 = `${data[0].dt_txt}`;
    const dateOnly0 = austinWeatherDate0.split(" ")
    const specificDate0 = `Date: ${dateOnly0[0]}`

    const austinWeatherTemp0 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity0 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind0 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date0El = document.querySelector('#date0');
    const temp0El = document.querySelector('#temp0');
    const wind0El = document.querySelector('#wind0');
    const humidity0El = document.querySelector('#humidity0');
    date0El.textContent = specificDate0;
    temp0El.textContent = austinWeatherTemp0;
    wind0El.textContent = austinWeatherHumidity0;
    humidity0El.textContent = austinWeatherWind0;

    const austinWeatherDate1 = `${data[0].dt_txt}`;
    const dateOnly1 = austinWeatherDate1.split(" ")
    const specificDate1 = `Date: ${dateOnly1[0]}`

    const austinWeatherTemp1 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity1 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind1 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date1El = document.querySelector('#date1');
    const temp1El = document.querySelector('#temp1');
    const wind1El = document.querySelector('#wind1');
    const humidity1El = document.querySelector('#humidity1');
    date1El.textContent = specificDate1;
    temp1El.textContent = austinWeatherTemp1;
    wind1El.textContent = austinWeatherHumidity1;
    humidity1El.textContent = austinWeatherWind1;

    const austinWeatherDate2 = `${data[8].dt_txt}`;
    const dateOnly2 = austinWeatherDate2.split(" ")
    const specificDate2 = `Date: ${dateOnly2[0]}`

    const austinWeatherTemp2 = `Temp: ${data[8].main.temp}`;
    const austinWeatherHumidity2 = `Humidity ${data[8].main.humidity}%`;
    const austinWeatherWind2 = ` Wind Speed: ${data[8].wind.speed}mph`;
    const date2El = document.querySelector('#date2');
    const temp2El = document.querySelector('#temp2');
    const wind2El = document.querySelector('#wind2');
    const humidity2El = document.querySelector('#humidity2');
    date2El.textContent = specificDate2;
    temp2El.textContent = austinWeatherTemp2;
    wind2El.textContent = austinWeatherHumidity2;
    humidity2El.textContent = austinWeatherWind2;

    const austinWeatherDate3 = `${data[16].dt_txt}`;
    const dateOnly3 = austinWeatherDate3.split(" ")
    const specificDate3 = `Date: ${dateOnly3[0]}`

    const austinWeatherTemp3 = `Temp: ${data[16].main.temp}`;
    const austinWeatherHumidity3 = `Humidity ${data[16].main.humidity}%`;
    const austinWeatherWind3 = ` Wind Speed: ${data[16].wind.speed}mph`;
    const date3El = document.querySelector('#date3');
    const temp3El = document.querySelector('#temp3');
    const wind3El = document.querySelector('#wind3');
    const humidity3El = document.querySelector('#humidity3');
    date3El.textContent = specificDate3;
    temp3El.textContent = austinWeatherTemp3;
    wind3El.textContent = austinWeatherHumidity3;
    humidity3El.textContent = austinWeatherWind3;
    
    const austinWeatherDate4 = `${data[24].dt_txt}`;
    const dateOnly4 = austinWeatherDate4.split(" ")
    const specificDate4 = `Date: ${dateOnly4[0]}`

    const austinWeatherTemp4 = `Temp: ${data[24].main.temp}`;
    const austinWeatherHumidity4 = `Humidity ${data[24].main.humidity}%`;
    const austinWeatherWind4 = ` Wind Speed: ${data[24].wind.speed}mph`;
    const date4El = document.querySelector('#date4');
    const temp4El = document.querySelector('#temp4');
    const wind4El = document.querySelector('#wind4');
    const humidity4El = document.querySelector('#humidity4');
    date4El.textContent = specificDate4;
    temp4El.textContent = austinWeatherTemp4;
    wind4El.textContent = austinWeatherHumidity4;
    humidity4El.textContent = austinWeatherWind4;

    const austinWeatherDate5 = `${data[32].dt_txt}`;
    const dateOnly5 = austinWeatherDate5.split(" ")
    const specificDate5 = `Date: ${dateOnly5[0]}`

    const austinWeatherTemp5 = `Temp: ${data[32].main.temp}`;
    const austinWeatherHumidity5 = `Humidity ${data[32].main.humidity}%`;
    const austinWeatherWind5 = ` Wind Speed: ${data[32].wind.speed}mph`;
    const date5El = document.querySelector('#date5');
    const temp5El = document.querySelector('#temp5');
    const wind5El = document.querySelector('#wind5');
    const humidity5El = document.querySelector('#humidity5');
    date5El.textContent = specificDate5;
    temp5El.textContent = austinWeatherTemp5;
    wind5El.textContent = austinWeatherHumidity5;
    humidity5El.textContent = austinWeatherWind5;
};

const getChicagoWeather = function () {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=41.878113&lon=-87.629799&appid=${apiKey}`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayChicago(data.list);
                    console.log(data.list)
                });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
const displayChicago = function (data) {
    const austinWeatherDate0 = `${data[0].dt_txt}`;
    const dateOnly0 = austinWeatherDate0.split(" ")
    const specificDate0 = `Date: ${dateOnly0[0]}`

    const austinWeatherTemp0 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity0 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind0 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date0El = document.querySelector('#date0');
    const temp0El = document.querySelector('#temp0');
    const wind0El = document.querySelector('#wind0');
    const humidity0El = document.querySelector('#humidity0');
    date0El.textContent = specificDate0;
    temp0El.textContent = austinWeatherTemp0;
    wind0El.textContent = austinWeatherHumidity0;
    humidity0El.textContent = austinWeatherWind0;

    const austinWeatherDate1 = `${data[0].dt_txt}`;
    const dateOnly1 = austinWeatherDate1.split(" ")
    const specificDate1 = `Date: ${dateOnly1[0]}`

    const austinWeatherTemp1 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity1 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind1 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date1El = document.querySelector('#date1');
    const temp1El = document.querySelector('#temp1');
    const wind1El = document.querySelector('#wind1');
    const humidity1El = document.querySelector('#humidity1');
    date1El.textContent = specificDate1;
    temp1El.textContent = austinWeatherTemp1;
    wind1El.textContent = austinWeatherHumidity1;
    humidity1El.textContent = austinWeatherWind1;

    const austinWeatherDate2 = `${data[8].dt_txt}`;
    const dateOnly2 = austinWeatherDate2.split(" ")
    const specificDate2 = `Date: ${dateOnly2[0]}`

    const austinWeatherTemp2 = `Temp: ${data[8].main.temp}`;
    const austinWeatherHumidity2 = `Humidity ${data[8].main.humidity}%`;
    const austinWeatherWind2 = ` Wind Speed: ${data[8].wind.speed}mph`;
    const date2El = document.querySelector('#date2');
    const temp2El = document.querySelector('#temp2');
    const wind2El = document.querySelector('#wind2');
    const humidity2El = document.querySelector('#humidity2');
    date2El.textContent = specificDate2;
    temp2El.textContent = austinWeatherTemp2;
    wind2El.textContent = austinWeatherHumidity2;
    humidity2El.textContent = austinWeatherWind2;

    const austinWeatherDate3 = `${data[16].dt_txt}`;
    const dateOnly3 = austinWeatherDate3.split(" ")
    const specificDate3 = `Date: ${dateOnly3[0]}`

    const austinWeatherTemp3 = `Temp: ${data[16].main.temp}`;
    const austinWeatherHumidity3 = `Humidity ${data[16].main.humidity}%`;
    const austinWeatherWind3 = ` Wind Speed: ${data[16].wind.speed}mph`;
    const date3El = document.querySelector('#date3');
    const temp3El = document.querySelector('#temp3');
    const wind3El = document.querySelector('#wind3');
    const humidity3El = document.querySelector('#humidity3');
    date3El.textContent = specificDate3;
    temp3El.textContent = austinWeatherTemp3;
    wind3El.textContent = austinWeatherHumidity3;
    humidity3El.textContent = austinWeatherWind3;
    
    const austinWeatherDate4 = `${data[24].dt_txt}`;
    const dateOnly4 = austinWeatherDate4.split(" ")
    const specificDate4 = `Date: ${dateOnly4[0]}`

    const austinWeatherTemp4 = `Temp: ${data[24].main.temp}`;
    const austinWeatherHumidity4 = `Humidity ${data[24].main.humidity}%`;
    const austinWeatherWind4 = ` Wind Speed: ${data[24].wind.speed}mph`;
    const date4El = document.querySelector('#date4');
    const temp4El = document.querySelector('#temp4');
    const wind4El = document.querySelector('#wind4');
    const humidity4El = document.querySelector('#humidity4');
    date4El.textContent = specificDate4;
    temp4El.textContent = austinWeatherTemp4;
    wind4El.textContent = austinWeatherHumidity4;
    humidity4El.textContent = austinWeatherWind4;

    const austinWeatherDate5 = `${data[32].dt_txt}`;
    const dateOnly5 = austinWeatherDate5.split(" ")
    const specificDate5 = `Date: ${dateOnly5[32]}`


    const austinWeatherTemp5 = `Temp: ${data[32].main.temp}`;
    const austinWeatherHumidity5 = `Humidity ${data[32].main.humidity}%`;
    const austinWeatherWind5 = ` Wind Speed: ${data[32].wind.speed}mph`;
    const date5El = document.querySelector('#date5');
    const temp5El = document.querySelector('#temp5');
    const wind5El = document.querySelector('#wind5');
    const humidity5El = document.querySelector('#humidity5');
    date5El.textContent = specificDate5;
    temp5El.textContent = austinWeatherTemp5;
    wind5El.textContent = austinWeatherHumidity5;
    humidity5El.textContent = austinWeatherWind5;
};

const getNewYorkWeather = function () {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=40.712776&lon=-74.005974&appid=${apiKey}`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayNewYork(data.list);
                    console.log(data.list)
                });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
const displayNewYork = function (data) {
    const austinWeatherDate0 = `${data[0].dt_txt}`;
    const dateOnly0 = austinWeatherDate0.split(" ")
    const specificDate0 = `Date: ${dateOnly0[0]}`


    const austinWeatherTemp0 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity0 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind0 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date0El = document.querySelector('#date0');
    const temp0El = document.querySelector('#temp0');
    const wind0El = document.querySelector('#wind0');
    const humidity0El = document.querySelector('#humidity0');
    date0El.textContent = specificDate0;
    temp0El.textContent = austinWeatherTemp0;
    wind0El.textContent = austinWeatherHumidity0;
    humidity0El.textContent = austinWeatherWind0;

    const austinWeatherDate1 = `${data[0].dt_txt}`;
    const dateOnly1 = austinWeatherDate0.split(" ")
    const specificDate1 = `Date: ${dateOnly1[0]}`

    const austinWeatherTemp1 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity1 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind1 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date1El = document.querySelector('#date1');
    const temp1El = document.querySelector('#temp1');
    const wind1El = document.querySelector('#wind1');
    const humidity1El = document.querySelector('#humidity1');
    date1El.textContent = specificDate1;
    temp1El.textContent = austinWeatherTemp1;
    wind1El.textContent = austinWeatherHumidity1;
    humidity1El.textContent = austinWeatherWind1;

    const austinWeatherDate2 = `${data[8].dt_txt}`;
    const dateOnly2 = austinWeatherDate2.split(" ")
    const specificDate2 = `Date: ${dateOnly2[0]}`

    const austinWeatherTemp2 = `Temp: ${data[8].main.temp}`;
    const austinWeatherHumidity2 = `Humidity ${data[8].main.humidity}%`;
    const austinWeatherWind2 = ` Wind Speed: ${data[8].wind.speed}mph`;
    const date2El = document.querySelector('#date2');
    const temp2El = document.querySelector('#temp2');
    const wind2El = document.querySelector('#wind2');
    const humidity2El = document.querySelector('#humidity2');
    date2El.textContent = specificDate2;
    temp2El.textContent = austinWeatherTemp2;
    wind2El.textContent = austinWeatherHumidity2;
    humidity2El.textContent = austinWeatherWind2;

    const austinWeatherDate3 = `${data[16].dt_txt}`;
    const dateOnly3 = austinWeatherDate3.split(" ")
    const specificDate3 = `Date: ${dateOnly3[0]}`

    const austinWeatherTemp3 = `Temp: ${data[16].main.temp}`;
    const austinWeatherHumidity3 = `Humidity ${data[16].main.humidity}%`;
    const austinWeatherWind3 = ` Wind Speed: ${data[16].wind.speed}mph`;
    const date3El = document.querySelector('#date3');
    const temp3El = document.querySelector('#temp3');
    const wind3El = document.querySelector('#wind3');
    const humidity3El = document.querySelector('#humidity3');
    date3El.textContent = specificDate3;
    temp3El.textContent = austinWeatherTemp3;
    wind3El.textContent = austinWeatherHumidity3;
    humidity3El.textContent = austinWeatherWind3;
    
    const austinWeatherDate4 = `${data[24].dt_txt}`;
    const dateOnly4 = austinWeatherDate4.split(" ")
    const specificDate4 = `Date: ${dateOnly4[0]}`

    const austinWeatherTemp4 = `Temp: ${data[24].main.temp}`;
    const austinWeatherHumidity4 = `Humidity ${data[24].main.humidity}%`;
    const austinWeatherWind4 = ` Wind Speed: ${data[24].wind.speed}mph`;
    const date4El = document.querySelector('#date4');
    const temp4El = document.querySelector('#temp4');
    const wind4El = document.querySelector('#wind4');
    const humidity4El = document.querySelector('#humidity4');
    date4El.textContent = specificDate4;
    temp4El.textContent = austinWeatherTemp4;
    wind4El.textContent = austinWeatherHumidity4;
    humidity4El.textContent = austinWeatherWind4;

    const austinWeatherDate5 = `${data[32].dt_txt}`;
    const dateOnly5 = austinWeatherDate5.split(" ")
    const specificDate5 = `Date: ${dateOnly5[0]}`

    const austinWeatherTemp5 = `Temp: ${data[32].main.temp}`;
    const austinWeatherHumidity5 = `Humidity ${data[32].main.humidity}%`;
    const austinWeatherWind5 = ` Wind Speed: ${data[32].wind.speed}mph`;
    const date5El = document.querySelector('#date5');
    const temp5El = document.querySelector('#temp5');
    const wind5El = document.querySelector('#wind5');
    const humidity5El = document.querySelector('#humidity5');
    date5El.textContent = specificDate5;
    temp5El.textContent = austinWeatherTemp5;
    wind5El.textContent = austinWeatherHumidity5;
    humidity5El.textContent = austinWeatherWind5;
};

const getLosAngelesWeather = function () {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=34.052235&lon=-118.243683&appid=${apiKey}`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayLosAngeles(data.list);
                    console.log(data.list)
                });
            } else {
                alert(`Error:${response.statusText}`);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};
const displayLosAngeles = function (data) {
    const austinWeatherDate0 = `${data[0].dt_txt}`;
    const dateOnly0 = austinWeatherDate0.split(" ")
    const specificDate0 = `Date: ${dateOnly0[0]}`


    const austinWeatherTemp0 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity0 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind0 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date0El = document.querySelector('#date0');
    const temp0El = document.querySelector('#temp0');
    const wind0El = document.querySelector('#wind0');
    const humidity0El = document.querySelector('#humidity0');
    date0El.textContent = specificDate0 ;
    temp0El.textContent = austinWeatherTemp0;
    wind0El.textContent = austinWeatherHumidity0;
    humidity0El.textContent = austinWeatherWind0;

    const austinWeatherDate1 = `${data[0].dt_txt}`;
    const dateOnly1 = austinWeatherDate1.split(" ")
    const specificDate1 = `Date: ${dateOnly1[0]}`


    const austinWeatherTemp1 = `Temp: ${data[0].main.temp}`;
    const austinWeatherHumidity1 = `Humidity ${data[0].main.humidity}%`;
    const austinWeatherWind1 = ` Wind Speed: ${data[0].wind.speed}mph`;
    const date1El = document.querySelector('#date1');
    const temp1El = document.querySelector('#temp1');
    const wind1El = document.querySelector('#wind1');
    const humidity1El = document.querySelector('#humidity1');
    date1El.textContent = specificDate1;
    temp1El.textContent = austinWeatherTemp1;
    wind1El.textContent = austinWeatherHumidity1;
    humidity1El.textContent = austinWeatherWind1;

    const austinWeatherDate2 = `${data[8].dt_txt}`;
    const dateOnly2 = austinWeatherDate2.split(" ")
    const specificDate2 = `Date: ${dateOnly2[0]}`


    const austinWeatherTemp2 = `Temp: ${data[8].main.temp}`;
    const austinWeatherHumidity2 = `Humidity ${data[8].main.humidity}%`;
    const austinWeatherWind2 = ` Wind Speed: ${data[8].wind.speed}mph`;
    const date2El = document.querySelector('#date2');
    const temp2El = document.querySelector('#temp2');
    const wind2El = document.querySelector('#wind2');
    const humidity2El = document.querySelector('#humidity2');
    date2El.textContent = specificDate2;
    temp2El.textContent = austinWeatherTemp2;
    wind2El.textContent = austinWeatherHumidity2;
    humidity2El.textContent = austinWeatherWind2;

    const austinWeatherDate3 = `${data[16].dt_txt}`;
    const dateOnly3 = austinWeatherDate3.split(" ")
    const specificDate3 = `Date: ${dateOnly3[0]}`


    const austinWeatherTemp3 = `Temp: ${data[16].main.temp}`;
    const austinWeatherHumidity3 = `Humidity ${data[16].main.humidity}%`;
    const austinWeatherWind3 = ` Wind Speed: ${data[16].wind.speed}mph`;
    const date3El = document.querySelector('#date3');
    const temp3El = document.querySelector('#temp3');
    const wind3El = document.querySelector('#wind3');
    const humidity3El = document.querySelector('#humidity3');
    date3El.textContent = specificDate3;
    temp3El.textContent = austinWeatherTemp3;
    wind3El.textContent = austinWeatherHumidity3;
    humidity3El.textContent = austinWeatherWind3;
    
    const austinWeatherDate4 = `${data[24].dt_txt}`;
    const dateOnly4 = austinWeatherDate4.split(" ")
    const specificDate4 = `Date: ${dateOnly4[0]}`


    const austinWeatherTemp4 = `Temp: ${data[24].main.temp}`;
    const austinWeatherHumidity4 = `Humidity ${data[24].main.humidity}%`;
    const austinWeatherWind4 = ` Wind Speed: ${data[24].wind.speed}mph`;
    const date4El = document.querySelector('#date4');
    const temp4El = document.querySelector('#temp4');
    const wind4El = document.querySelector('#wind4');
    const humidity4El = document.querySelector('#humidity4');
    date4El.textContent = specificDate4;
    temp4El.textContent = austinWeatherTemp4;
    wind4El.textContent = austinWeatherHumidity4;
    humidity4El.textContent = austinWeatherWind4;

    const austinWeatherDate5 = `${data[32].dt_txt}`;
    const dateOnly5 = austinWeatherDate5.split(" ")
    const specificDate5 = `Date: ${dateOnly5[0]}`

    const austinWeatherTemp5 = `Temp: ${data[32].main.temp}`;
    const austinWeatherHumidity5 = `Humidity ${data[32].main.humidity}%`;
    const austinWeatherWind5 = ` Wind Speed: ${data[32].wind.speed}mph`;
    const date5El = document.querySelector('#date5');
    const temp5El = document.querySelector('#temp5');
    const wind5El = document.querySelector('#wind5');
    const humidity5El = document.querySelector('#humidity5');
    date5El.textContent = specificDate5;
    temp5El.textContent = austinWeatherTemp5;
    wind5El.textContent = austinWeatherHumidity5;
    humidity5El.textContent = austinWeatherWind5;
};


austinButton.addEventListener('click', getAustinWeather);
chicagoButton.addEventListener('click', getChicagoWeather);
newYorkButton.addEventListener('click', getNewYorkWeather);
losAngelesButton.addEventListener('click', getLosAngelesWeather);