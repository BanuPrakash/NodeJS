const {add, subtract} = require('../app/math');
const {expect} = require('chai');

// test suite
describe("testing math module", () => {
    // test spec
    it("testing add", () => {
        let result = add(4,5);
        expect(9).to.be.equal(result);
    });

    it("testing subtract", () => {
        let result = subtract(14,4);
        expect(10).to.be.equal(result);
    });
});