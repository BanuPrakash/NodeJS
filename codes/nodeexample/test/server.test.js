const {expect} = require('chai');
const request = require('request');

// test suite
describe("testing server module", () => {
  
    // test spec
    it("testing add", (done) => {
        let url = "http://localhost:3000/add?x=10&y=15";
        request(url, (error, response, body) => {
            expect("325").to.be.equal(body);
            done();
        });
    });

    it("testing subtract", (done) => {
        let url = "http://localhost:3000/subtract?x=30&y=15";
        request(url, (error, response, body) => {
            expect("165").to.be.equal(body);
            done();
        });
    });
});