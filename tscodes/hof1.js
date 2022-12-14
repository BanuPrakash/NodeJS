var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var data = [5, 1, 12, 31, 9, 46];
// HOF
function forEach(elems, action) {
    var i = 0;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
// HOF
function filter(elems, predicate) {
    var result = [];
    forEach(elems, function (e) {
        if (predicate(e)) {
            result.push(e);
        }
    });
    return result;
}
var evens = filter(data, function (e) { return e % 2 === 0; });
var mobiles = filter(products, function (e) { return e.category === 'mobile'; });
forEach(evens, console.log);
forEach(mobiles, console.log);
