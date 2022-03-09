// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1
import { reverseString } from './reverseString.test';

// O(log n)
function reverseInt(input: number): number {
    const num = parseInt(reverseString(String(input)));

    if (input < 0) {
        return num * (-1);
    }

    return num;
}


describe("Integer Reversal", () => {
    it("should reverse positive numbers", () => {
        expect(reverseInt(3)).toBe(3);
        expect(reverseInt(13)).toBe(31);
        expect(reverseInt(100)).toBe(1);
        expect(reverseInt(1408)).toBe(8041);
    });

    it("should reverse negative numbers", () => {
        expect(reverseInt(-3)).toBe(-3);
        expect(reverseInt(-13)).toBe(-31);
        expect(reverseInt(-100)).toBe(-1);
        expect(reverseInt(-1408)).toBe(-8041);
    });
})