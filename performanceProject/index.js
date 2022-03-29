// const cluster = require("cluster");
const crypto = require("crypto");
const Worker = require("worker_threads").Worker;
//is the file being executed in Master mode
// if (cluster.isMaster) {
//   //Cause the index.js to be executed *again* but in child mode
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
// } else {
//   //I'm a child, im going to act like a server and nothing else

// }

const express = require("express");
const app = express();

// function doWork(duration) {
//   const start = Date.now();
//   while (Date.now() - start < duration) {}
// }

app.get("/", (req, res) => {
  // doWork(5000);
  // crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  //   res.send("Hi Bart");
  // });
  const worker = new Worker("./worker.js");
  worker.on("message", (message) => {
    console.log(message);
    res.send(message);
  });
});

app.get("/fast", (req, res) => {
  res.send("This was fast ");
});

app.listen(3000, () => {
  console.log("App listenning on port 3000");
});
