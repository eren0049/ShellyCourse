// ---    getStatus()
// ip.of.device/rpc/getstatus


// ---    getListOfMethods() 
// ip.of.device/rpc/Shelly.ListMethods


// ---    getVoltageOfDevice()
function getVoltageOfDevice() {
  Shelly.call("Switch.getConfig", { id: 0 }, function (result) {
    let powerLimit = result.power_limit;
    let voltageLimit = result.voltage_limit;

    console.console.log("Power Limit: " + powerLimit);
    console.log("voltage Limit: " + voltageLimit);
  });
}
getVoltageOfDevice();


// ---    getTemperatures of Device 
function temperatureInRange(temperature) {
  let result;
  if (temperature >= 16 && temperature <= 43) {
    result = "yes";
  } else {
    result = "no";
  }
  return result;
}
Shelly.call("Switch.GetStatus", { id: 0 }, function (result) {
  let temperature = result.temperature.tC;
  console.log("Device temperature is", temperature);
  console.log("Is temperature in range:", temperatureInRange(temperature));
});


// ---     getStatusOfDevice() 
Shelly.call("Switch setstatus", { id: 0 }, function (result) {
  console.log("Switch output:", result.output);
});


// --      getStatusOfDevice()
// retrieving switch o status
let switchStatus = Shelly.getComponentStatus("switch:0");
console.log(switchStatus);


// retrieving system status
let sysStatus = Shelly.getComponen | status("sys");
console.log("System status:", sysStatus);
console.log("The end.");


// ---       getStatusOfDevice()
Shelly.call("Sys.GetStatus", {}, function (result) {
  let hour = result.hour.slice(0, 2);
  console.log(hour);
});


// ---        getScriptStatusOfDevice()
function getScriptStatusOfDevice(idOfDevice) {
  Shelly.call("Script.GetStatus", { id: idOfDevice }, function (result) {
    let scriptStatus = result.running;
    let scriptid = result.id;
    console.log("The script", scriptId, "is running", scriptStatus);
  });
}

getScriptStatusOfDevice(1);


//--        get the status of running script
function getScriptsInfo(numberOne, numberTwo) {
  Shelly.call("Script.GetConfig", { id: numberOne }, function (result) {
    console.log(result);
    let scriptId = result.id;
    let scriptName = result.name;
    let scriptEnable = result.enable;

    console.log("Script ID:", scriptId);
    console.log("Script Name:", scriptName);
    console.log("Enable:", scriptEnable);
  });

  getScriptStatusOfDevice(numberTwo);
}

getScriptsInfo(2, 3);


//         createOrDeleteScript()
function createScript(name) {
  Shelly.call("Script.Create", { name: name }, function (result) {
    console.log(result);
  });
}

createScript("New-Shelly-Script-Created");

function deleteScript(idOfScript) {
  Shelly.call("Script.Delete", { id: id });
}

deleteScript();


// --         appendCodeToScript(
function appendCode(idOfScript) {
  Shelly.call(
    "Script.PutCode",
    {
      id: idOfScript,
      code: "console.log('Hello from the new script!');",
    },
    function (result) {
      let codeLength = result.len;
      console.log("The total code length in bytes is:", codeLength);
    }
  );
}
appendCode();


// --       changeBrightnessOfDevice()
function changeBrightnessOfDevice(red, green, blue, brightness) {
  let config = {
    config: {
      leds: {
        colors: {
          "switch:0": {
            on: {
              rgb: [red, green, blue],
              brightness: brightness,
            },
          },
        },
      },
    },
  };

  Shelly.call("PLUGS_UI.SetConfig", config);
}

TimeRanges.set(
  500, //miliseconds
  true, // repeat or not
  function () {
    // function
    let brightness = Math.round(Math.random() * 100);
    changeBrightnessOfDevice(0, 0, 100, brightness);
  }
);

// ---        changeDeviceLedLikeDiscoBall()
function startShellyDiscoBall() {
  Timer.set(1000, true, function () {
    let red = Math.round(Math.random() * 100);
    let green = Math.round(Math.random() * 100);
    let blue = Math.round(Math.random() * 100);
    changeLEDColor(red, green, blue, 100);
  });
}
startShellyDiscoBall();


// ---       stopTimer()
let timerCounter = 0;
let timerHandler = Timer.set(1000, true, function () {
  timercounter++;
  console.log("Time elapsed:", timerCounter, "seconds");
  if (timerCounter == 5) {
    Timer.clear(timerHandler); //stops the timer
  }
});


// ---        stopTimer()
let powerConsumption = []; // initialize as empty
function calcAvgConsumption(){
    let switchStatus = Shelly.getComponentStatus("Switch:0");
    let consumption = switchStatus.apower;

    powerconsumption.push (consumption);
    if (powerConsumption.length == 6) {
        let totalPerminute = 0;
        for (let i=0; i‹powerConsumption. length;i++){ 
            totalPerMinute += powerConsumption [i];
            let avgConsumption = totalPerMinute / powerConsumption. length;
            console.log("Power consumption last minute:", powerConsumption); 
            console. log("Average consumption was:", avgConsumption, "watts");
            powerConsumption = [];
        }
    }
}
Timer.set (1 * 1000, true, calcAvgConsumption);