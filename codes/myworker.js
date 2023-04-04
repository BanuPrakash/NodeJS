const {parentPort, workerData} = require('worker_threads');

parentPort.postMessage(fibanocci(workerData.num));

// runs on different stack; not on main stack
function fibanocci(num) {
    if(num  == 0 || num == 1) {
        return num;
    } else {
        return fibanocci(num - 1) + fibanocci(num - 2);
    }
}