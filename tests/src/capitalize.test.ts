// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

//O(n)
function capitalize(input: string): string {
    const text = input
        .split(" ")
        .reduce((sentence: string, currentText: string) => {
            const a = currentText[0].toUpperCase();
            const b = a.concat(currentText.slice(1).toLowerCase());
            return sentence.concat(b, " ");
        }, "");
    return text.trim();
}

describe("Capitalization", () => {
    it("should capitalize the first letter of each word and the rest of the word in lowercase", () => {
        expect(capitalize("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
        expect(capitalize("sHoRt AnD sToUt")).toBe("Short And Stout");
    });
});
