const {expect} = require('chai');
const request = require('request');

// test suite
describe("testing server module", () => {
    // test spec
    it("testing add", (done) => {
        // jest.setTimeout(25000)
        let url = "http://localhost:3000/add?x=10&y=15";
        request(url, (error, response, body) => {
            expect("25").to.be.equal(body);
            done();
        });
    });

    it("testing subtract", (done) => {
        // jest.setTimeout(25000)
        let url = "http://localhost:3000/subtract?x=30&y=15";
        request(url, (error, response, body) => {
            expect("15").to.be.equal(body);
            done();
        });
    });
});