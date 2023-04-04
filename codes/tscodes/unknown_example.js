function doAnotherTask(cb) {
    if (typeof cb === 'function') {
        cb();
    }
    else if (typeof cb === 'string') {
        console.log(cb.toUpperCase());
    }
}
doAnotherTask("Hello");
