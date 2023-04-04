let {add, forEach, filter} = require('../src/lib');

// Test Suite
describe("testin lib module", () => {
    // test spec
    it("testing add", () => {
        let expected = 9;
        let result = add(4,5);
        expect(result).toBe(expected); // assertion
    });

    it("testing forEach", () => {
        // forEach has a dependency on action callback
        let mockCallback = jest.fn(); // mock function
        let data = [8,1,55];
        forEach(data, mockCallback);
        console.log(mockCallback.mock.calls);
        expect(mockCallback.mock.calls).toHaveLength(3);
        expect(mockCallback.mock.calls[0][0]).toBe(8);
        expect(mockCallback.mock.calls[1][0]).toBe(1);
        expect(mockCallback.mock.calls[2][0]).toBe(55);
    });

    it("testing filter", () => {
        let mockCallback = jest.fn(e => e % 2 === 0 );
        let data = [4,2,1,8,3];
        let result = filter(data, mockCallback);
        expect(result.length).toBe(3);
        expect(result[0]).toBe(4);
    });
});