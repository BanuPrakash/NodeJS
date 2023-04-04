const {Worker} = require('worker_threads');

let number = 34;

const worker = new Worker("./myWorker.js", {workerData: {num:number}});

worker.once("message", result => {
    console.log(`${number}th Fibanocci is ${result}`);
});

worker.on("error", error => console.log(error));

console.log("Main Thread!!!");