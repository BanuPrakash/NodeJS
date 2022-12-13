// Main Thread
const {Worker} = require('worker_threads');

let num = 34;

const worker = new Worker("./myWorker.js", { workerData:{no:num}});

worker.on("message", result => {
    console.log("Result ", result);
});

 
worker.on("error", (err) => console.log("Error", err));

worker.on("exit", () => console.log("Worker exits!!!"));




