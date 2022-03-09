// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

//O(n)
export function reverseString(input: string): string {
    return input.split("").reverse().join("");
}

//O(n)
function reverseString2(input: string): string {
    let text = "";

    for (let i = 0; i < input.length; i++) {
        text = input[i] + text;
    }
    return text;
}

//O(n)
function reverseString3(input: string): string {
    let text = "";

    for (let i = input.length - 1; i >= 0; --i) {
        text = text + input[i];
    }
    return text;
}

describe("String Reversal", () => {
    it("should return a reversed text", () => {
        expect(reverseString("Hello")).toBe("olleH");
        expect(reverseString("ffaa")).toBe("aaff");
        expect(reverseString("  aaff")).toBe("ffaa  ");
    });

    it("reverseString2 should return a reversed text", () => {
        expect(reverseString2("ball")).toBe("llab");
    });

    it("reverseString3 should return a reversed text", () => {
        expect(reverseString3("abc")).toBe("cba");
    });
});
