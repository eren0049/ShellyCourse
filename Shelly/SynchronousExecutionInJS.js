// This class is for Syncronous and Asynchronous Executions Models.
// <<<<<<<<<<<<<<<<<<<<<<<<<<<   Syncronous Model >>>>>>>>>>>>>>>>>>>>>>>>>
// - Synchronous is known as a blocking architecture
// - Operations are performed one at a time, in perfect order
// - While one operation is being performed, other operations' instructions are blocked
// - Ex: two people talking on the phone -> personA speaks personB listens, and personB speaks and personA listens.
// Graphical looks like this:
//  |Task A|
//          |Task B|
//                  |Task C|
//                          |Task D|

function taskA() {
  console.log("Hello.");
}
function taskB() {
  console.log("Hello again!");
}
function taskC() {
  console.log("Goodbye!");
}
function taskD() {
  console.log("Goodbye!");
}

taskA();
taskB();
taskC();
taskD();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<   Asyncronous Model >>>>>>>>>>>>>>>>>>>>>>>>>
// - Asynchronous is a non-blocking architecture
// - Doesn't block further execution while one or more operations are in progress
// - Multiple related operations can run concurrently without waiting for other tasks to complete
// - Ex: two people texting on the phone -> personA and personB can text each other,
//       and on the background they may talk with someone else other other tasks can be done.
// Graphical looks like this:
//  |Task A -----> |
//  |Task B --> |
//  |Task C -> |
//  |Task D ----->|

function taskA() {
  console.log("Hello.");
}
function taskB() {
  console.log("Hello again.");
}

function taskC() {
  Timer.set(2000, false, function () {
    console.log("Goodbye");
  });
}

taskA();
taskC();
taskB();