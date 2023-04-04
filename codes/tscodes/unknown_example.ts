function doAnotherTask(cb:unknown) {
    if(typeof cb === 'function') {
        cb();
    } else if(typeof cb === 'string') {
        console.log(cb.toUpperCase());
    }
}

doAnotherTask("Hello");
