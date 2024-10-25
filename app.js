function getWeatherData() {
    var city = document.getElementById("city").value;

    axios.get('https://api.weatherapi.com/v1/current.json?key=bc95a555c96041ed99970949220107&q='+city)
    // true   
    .then(function (response) {

    var data = response.data;
    console.log(data);

    let icon = data.current.condition.icon;
    let removeSlash = icon.replace("//", "");
    document.getElementById("icon").src = `https:${removeSlash}`;
    // console.log(removeSlash);

    let temp = data.current.temp_c;
    document.getElementById("temp").innerText = `${temp}°C`;
    // console.log(temp);

    let text = data.current.condition.text;
    document.getElementById("text").innerText = `(${text})`;
    // console.log(sunMoonIcon);

    let time = data.location.localtime;
    document.getElementById("time").innerText = `Local Time: ${time}`;
    // console.log(time);

    let city = data.location.name;
    let region = data.location.region;
    let country = data.location.country;
    let loc = `Location: ${city} , ${region} , ${country}`;
    document.getElementById("loc").innerText = loc;
    // console.log(loc);

    let fh = data.current.temp_f;
    document.getElementById("fh").innerText = `Fahrenheit:  ${fh} °F`;
    // console.log(fh);

    let fl = data.current.feelslike_c;
    document.getElementById("fl").innerText = `Feelslike: ${fl} °C`;
    // console.log(fl);

    let humi = data.current.humidity;
    document.getElementById("humi").innerText = `Humidity: ${humi}%`;
    // console.log(humi);
    
    let visib = data.current.vis_km;
    document.getElementById("visib").innerText = `Visibility: ${visib}km`;
    // console.log(visibi);

    let ws = data.current.wind_kph;
    document.getElementById("ws").innerText = `Wind Speed: ${ws}kp/h`
    // console.log(ws);




    

})
    


}



