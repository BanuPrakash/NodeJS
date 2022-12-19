let {random} = require('lodash');

module.exports.add = function (a, b) {
    return a + b + random(1, 400);
}