// This is a function makes API calls and sets lights according to the results

function timerCode() {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=42.698334&longitude=23.319941&current_weather=true";
    
    Shelly.call("HTTP.GET", {url:url}, function(result){
        let response = JSON.parse (result.body);
        let temperature = response.current_weather.temperature;
        console.log("Current temperature is", temperature);
    
        if(temperature > 25){
            // turn SWI on, sw2 off
        }else if(temperature > 10){
            // turn SWI off, Sw2 on

        }else{
            // turn SW and SW2 on
        }         
    
    });
}

Timer.set (5000, true, timerCode); //5 seconds