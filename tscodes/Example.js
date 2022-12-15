function fetchData(id) {
    return new Promise(function (resolve, rejected) {
        setTimeout(function () {
            resolve({ "id": 2, "name": "Tim" });
        }, 2000);
    });
}
fetchData(2).then(function (res) { return console.log(res); }, function (err) { return console.log(err); });
