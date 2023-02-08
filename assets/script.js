//TO DO: set up event listener for button to produce results on clicking

//TO DO: connect API key to search bar to include all cities

//TO DO: display 5 day forcast and current forecast for the city chosen

//TO DO: Append the previous searches to the page using local storage

$(document).ready(function() {  

    let cityHistory = JSON.parse(localStorage.getItem("city")) || [];

   $(".btn").on("click", (event) => {
   event.preventDefault();  

   getCityName()
   
   localStorage.setItem('City', JSON.stringify(cityHistory))
   
});
//Code below is the beginning of Dayjs integration
//function for find city name
function getCityName() {
    var cityName = $("#search-input").val();
    if (cityName === "") {
       
        alert("Whoops, that's not a city!");
         
     } else {
         findWeather(cityName);


    console.log(cityName)
}

}
//let currentDate = $('#current-date').text(today.format('MMMM DD, YYYY'));

//let day1Date = 

        //weather API Key
        var APIKey = "4af337e04f29675ecae50ddb8a8e1565";

        var prevSearches = [];

        //collect user input for city name 


// Code written in Tutoring
// update hardcoded city to be search input
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=4af337e04f29675ecae50ddb8a8e1565')
    .then(res => res.json())
    .then(data => {
        const forecastCard = document.getElementById('forecast-card')


    data.list.forEach(forecast => {
        const date = new Day.js(forecast.dt * 1000).format('MM/DD/YYYY');
        console.log(date)
        const temp = forecast.main.temp;
        
        forecastCard.innerHtml += `
        <div>
        <h3> ${date} </h3>
        <p> temp : ${temp} </p>
        </div>`
    })
})
    .catch(err => {
        console.log(err)
    })
    var cityName = $("#search-input").value;

        function findWeather() {
            //fetching data from API

            console.log("aaaaaaaaa")
        
            let coords = [];
        
        
            $.ajax({
            
            
                url: "https://api.openweathermap.org/data/2.5/weather?q=austin&appid=4af337e04f29675ecae50ddb8a8e1565",  /*+ cityName + "&appid=" + APIKey&units=imperial,*/ 
                method: "GET", 
            
                // syntax and method assisted by classmate Emma Boushka

            }).then(response => {
                coords.push(response.coord.lat);    
                coords.push(response.coord.lon);
            
                let city = response.name;
                let icon = response.weather[0].icon;
                let temp = response.main.temp;
                let wind = response.wind.speed;
                let hum = response.main.humidity;
               
                
                //$('#current-date').text(today.format('MMMM DD, YYYY'));
                $("#current-city").text(city);
                $("#current-temp").text("Temperature: " + temp);
                $("#icon").html(`<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`);
                $("#current-wind").text("Wind Speed: " + wind + "MPH" );
                $("#current-hum").text("Humidity: " + hum + "%");
            
                console.log("WTF MAN")
                
            

            


            })
        }
            findWeather();


//ignore portion of array that's already renderd
//$(#stored-cities).html("")''
 

});


























