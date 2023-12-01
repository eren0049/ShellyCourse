// Variables 
let isDeviceOn = false;
let timer=3000;
let randonTimer = randomIntFromInterval(3) *1000;
let setDeviceOn = (randomIntFromInterval(2) === 1) ? true: false;

// random number generator
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// Timer (duration, true, function(){});
Timer.set(timer,true,function(){
    if(setDeviceOn){
        Shelly.call("Switch.set",{"id":0, "on":true});
    }else{
        Shelly.call("Switch.set",{"id":0, "on":false});
    }
}); 