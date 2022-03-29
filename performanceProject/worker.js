const { parentPort } = require("worker_threads");

let counter = 0;

while (counter < 10e9) {
  counter++;
}

parentPort.postMessage(`Counted it: ${counter}`);
