function isProduct(data) {
    console.log("isProduct!!!");
    return typeof data.getName === 'function';
}
function isErrorMsg(data) {
    return 'getMsg' in data;
}
function getData(data) {
    if (isProduct(data)) {
        return data.getName();
    }
    if (isErrorMsg(data)) {
        return data.getMsg();
    }
}
var err = { getMsg: function () { return "Boom :-("; } };
console.log(getData(err));
