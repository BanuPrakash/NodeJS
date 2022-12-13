// Worker Thread
const {parentPort, workerData} = require('worker_threads');

function fibonacci(no) {
    if(no == 0 || no == 1) {
        return no;
    } else {
        return fibonacci(no-1) + fibonacci(no - 2);
    }
}
 
parentPort.postMessage(fibonacci(workerData.no));
