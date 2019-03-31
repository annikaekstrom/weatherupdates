const myFunction = () => {
  const cityFetch = "http://api.openweathermap.org/data/2.5/weather?q="
  +
  document.getElementById("citySelection").value
  +
  "&units=metric&APPID=6619586b752c5758be6d0be47fbed668"

  fetch(cityFetch).then((response) => {
    return response.json()
  }).then((json) => {
    // document.getElementById("cityHeading").innerHTML = json.name
    document.getElementById("celsius").innerHTML =
    (`${json.main.temp_max}°c, ${json.weather[0].description}`)
    // if (json.name = "Stockholm") {
    //   document.getElementById("celsius").classList.toggle("hello")
    // } else {
    //   document.getElementById("celcius").classList.toggle("city")
    // }

    const sunriseToday = new Date(json.sys.sunrise * 1000);
    const sunsetToday = new Date(json.sys.sunset * 1000)
      document.getElementById("sunrise").innerHTML = "Sunrise today at " + sunriseToday.toLocaleTimeString()
      document.getElementById("sunset").innerHTML = "Sunset today at " + sunsetToday.toLocaleTimeString()

   })
}

window.onload = myFunction;
document.getElementById("citySelection").addEventListener("change", myFunction);
