// This class is for understanding Event handling for Shelly

// What is Event Handler :    
//     - Events are things, which happen in the system you are programming
//     - To react to an event, you attach an event handler, sometimes called event listener
//     - The listener listens out for the event happening, and the handler is the code tha run in response

// Logic: 
//     - have to have at least 2 script 
//     - run the Script #2, catch it from Script # 1


// put these in Script #1
function stopTimer (timer) {
    console. log("Stopping timer",timer);
}

function startTimer (timer) {
    console. log("Starting timer",timer);
}

Shelly.addEventHandler (
    function (event) {
        if (event.info.event === 'RESET_TIMER') {
            let timer= event.info.data.timer;
            stopTimer (timer); 
            startTimer (timer);
            console. log ("TIMER WAS RESET");
        }
    }
);


// put these in Script #2 
Shelly.emitEvent ("RESET_TIMER", {"timer" :5});