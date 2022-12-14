function doTask2(cb:unknown): void {
    if(typeof cb === 'function') {
        cb();
    } else if (typeof cb === 'string'){
        console.log(cb);
    }
}

doTask2("hello");