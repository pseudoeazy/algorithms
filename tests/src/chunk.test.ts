// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

type AlphaNum = (string | number)[];

//O(n)
function chunk(array: AlphaNum, size: number): AlphaNum[] {
    let resultArr: AlphaNum[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const lastItem = resultArr[resultArr.length - 1];

        if (!lastItem || lastItem.length === size) {
            resultArr.push([item]);
        } else {
            lastItem.push(item);
        }

    }
    return resultArr;

}


describe("Array Chunking", () => {
    it("should splits an array into groups the length of size", () => {
        expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]])
        expect(chunk([0, 1, 2, 3, 4, 5], 4)).toEqual([[0, 1, 2, 3], [4, 5]])
    })
});