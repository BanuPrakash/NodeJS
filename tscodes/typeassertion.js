function getData(data) {
    if (typeof data.getName === 'function') {
        return data.getName();
    }
    if (typeof data.getMsg === 'function') {
        return data.getMsg();
    }
}
console.log(getData({ getMsg: function () { return "Boom :-("; } }));
