# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

This is a WeatherApp which runs on a localhost using Node.js. It uses a geolocation API (Abstract API - https://app.abstractapi.com/dashboard) to get the user's current location upon loading the site, then passes the city's location to a weather API (Weather API from Rapid API - https://rapidapi.com/Zoom4Develop/api/weather1395/), afterwards the site takes the responses and shows the name of the city, the current temperature, precipitation per mm, humidity and wind speed.
It also features a search bar to find any city in the world and show these values for the searched city. It has different icons next to the city name which change depending on the weather condition of the city passed to the weather API, the background also changes depending on the weather conditions.
The app is also responsive.

<!!-- Prerequisites --!!>
-Node.js
-Angular CLI

<!!---- How to run this app ----!!>
- Open the index.html file in the src folder with your IDE (I use VS Code)
- Open a terminal in your IDE of choice 
- Run the following command: ng serve    This will start a localhost which you should be able to access at http://localhost:4200/   with your browser, if not, your terminal should say where to access it
- After accessing http://localhost:4200/ with your browser and after the page loads, you should get the temperature, precipitation, humidity and wind speed for the city you are in
- You should be able to type in the search bar any city you wish to view the weather in

<!!----- DISCLAIMER ------!!>
-I've noticed that the Weather API can sometimes mistake some cities for others, for example: Porto, Portugal for Porto, Brazil. In that case the data and the themes might be wrong, you can check what city the API returned with the devtools in the console. There should be a log that looks like this: {location: {...}, current{...}}   .It's the response returned by the API, open the log and under the location section you can see in what country and what region of that country the city it thinks you're trying to search for is.
-If you encounter this problem, simply add the country after the city name in the search bar.
-Also please note that different online apps give slightly different weather data, so if you look a city up both on this app and some other one, don't worry if they're not a 100% match as long as they're in the same ball park. 

<--- Other Mentions --->
-The pictures used as backgrounds were obtained from:https://www.pexels.com
-The icons we obtained from: https://www.flaticon.com

