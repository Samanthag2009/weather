//TO DO: set up event listener for button to produce results on clicking

//TO DO: connect API key to search bar to populate search query

//TO DO: display 5 day forcast and current forecast for the city chosen

//TO DO: Append the previous searches to the page using local storage



//weather API Key
var APIKey = "4af337e04f29675ecae50ddb8a8e1565";

var prevSearches = [];

//collect user input for city name 

var cityName = document.getElementById("search-input").value;

var currentWeather = function(e) {
//fetching data from API
e.preventDefault();
console.log("aaaaaaaaa")

    fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={APIKey}")
    
    //turn response into strings

    .then(response => {
    return response.json();     
    
    })

    //get data for the current weather section

    .then(function(response) {

        (cityName);

    //adding current weather visuals to page

        var currentWeatherBox = $("#current-weather");

        var currentTitle = $("#title");
        
        var currentTemp = $("#current-temp");
        currentTemp.text("Temperature: " + response.current.temp);

        var currentWind = $("current-wind");
        currentWind.text("Wind Speed: " + response.current.wind_speed + "MPH");
        
        var currentHum = $("current-hum");
        currentHum.text("Humidity: " + response.currend.humidity + "%");

        // add current temperature to page


    }
    
    )

}

document.getElementById("weather-form").addEventListener("submit", currentWeather);

//enable local search

//save results to local storage

//display saved results

//display 5 day forecast

//search form submitted

//click submit, then search for city name, then show it
//$(search-form).on("submit", function() {
 //   event.preventDefault;


//}


//)