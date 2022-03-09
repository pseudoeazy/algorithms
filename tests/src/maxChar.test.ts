// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

//O(n)
function maxCharacter(input: string | number): string {
    let text = typeof input === "number" ? String(input) : input;
    const charCountObj: { [key: string]: number } = {};
    let maxChar = "";
    let maxCount = 0;

    for (let i = text.length - 1; i > 0; --i) {
        const char = text[i];

        charCountObj[char] = charCountObj[char] + 1 || 1;
        if (charCountObj[char] > maxCount) {
            maxChar = char;
            maxCount = charCountObj[char];
        }
    }

    return maxChar;

}

//O(n)
function maxCharacter2(input: string | number): string {
    let text = typeof input === "number" ? String(input) : input;
    let maxCount = 0;
    let maxChar = "";

    [...text].reduce((countObject: { [key: string]: number }, char: string) => {
        if (char in countObject) {
            countObject[char]++;
        } else {
            countObject[char] = 1;
        }

        if (countObject[char] > maxCount) {
            maxCount = countObject[char];
            maxChar = char;
        }
        return countObject;
    }, {});


    return maxChar;
}


describe("Max Character", () => {
    it("should return the character most commonly used in the string", () => {
        expect(maxCharacter("I loveeeeeee noodles")).toBe("e");
    });
    it("maxCharacter2 returns most frequent character", () => {
        expect(maxCharacter2(1337)).toBe("3");
    });
})