// | union type
function printData(data) {
    if ("name" in data) {
        console.log("Result ", data.name);
    }
    else if ("msg" in data) {
        console.log("Error ", data.msg);
    }
}
printData({ "msg": "Invalid Data" });
printData({ "name": "Macbook Pro" });
