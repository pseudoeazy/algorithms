function oddsGreaterThan100(): number {
    return 101;
}

describe("oddsGreaterThan100", () => {
    const number = oddsGreaterThan100();

    it("should return an odd number", () => {
        const isOddNumber = number % 2 !== 0;
        expect(isOddNumber).toBe(true);
    });

    it("should be greater than 100", () => {
        const isGreaterThan100 = number > 100;
        expect(isGreaterThan100).toBe(true);
    });
});
