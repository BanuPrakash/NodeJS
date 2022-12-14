function doTask(cb) {
    if (typeof cb === 'function') {
        cb();
    }
    else if (typeof cb === 'string') {
        console.log(cb);
    }
}
doTask("hello");
