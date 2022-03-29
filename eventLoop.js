"use strict";

//node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];
//new timers, tasks, operations are recorded from myFile running
function shouldContine() {
  // check one: any pending setTimeout, setInterval, setImmediate?
  // check two: any pending OS tasks
  // check three: any pending long running operations (like fs modules)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

myFile.runContents();

while (shouldContine()) {
  //1) node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
  // 2) node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  //3) node pauses execution. Continue when... a new pendingOSTask is done or a new pendingOPeration is done or a timer is about to complete
  //4) Look at pendingTimers. Call any setImmediate
  //5) handle any 'close' events
}

//exit back to terminal
