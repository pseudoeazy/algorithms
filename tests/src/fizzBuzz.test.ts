// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

export type Log = (logMsg: any) => void;
export const Logger: Log = (logMsg): void => {
    // console.log(logMsg);
}

//O(n)
function fizzBuzz(num: number, log: Log): void {

    for (let i = num; i > 0; --i) {

        const isMultipleOfThree = num % 3 === 0;
        const isMultipleOfFive = num % 5 === 0;

        if (isMultipleOfThree && isMultipleOfFive) {
            log("fizzbuzz");
        } else if (isMultipleOfFive) {
            log("buzz");
        } else if (isMultipleOfThree) {
            log("fizz");
        } else {
            log(num);
        }
    }
}

//O(n)
function fizzBuzz2(num: number, log: Log): void {

    for (let i = num; i > 0; --i) {

        let logMsg: number | string = '';
        const isMultipleOfThree = num % 3 === 0;
        const isMultipleOfFive = num % 5 === 0;

        if (isMultipleOfThree) {
            logMsg += 'fizz'
        }
        if (isMultipleOfFive) {
            logMsg += 'buzz';
        }

        if (logMsg === '') {
            logMsg = num;
        }

        log(logMsg);
    }
}




describe("Fizz Buzz", () => {
    it('should console.log the text "fizzbuzz"', () => {
        const mockCallback = jest.fn(Logger);
        fizzBuzz(15, mockCallback);
        expect(mockCallback.mock.calls[0][0]).toEqual("fizzbuzz");
    });
    it('fizzBuzz2 should console.log the text "fizzbuzz"', () => {
        const mockCallback = jest.fn(Logger);
        fizzBuzz2(45, mockCallback);
        expect(mockCallback.mock.calls[0][0]).toEqual("fizzbuzz");
    });

    it('should console.log the text "buzz"', () => {
        const mockCallback = jest.fn(Logger);
        fizzBuzz(10, mockCallback);
        expect(mockCallback.mock.calls[0][0]).toEqual("buzz");
    });

    it('should console.log the text "fizz"', () => {
        const mockCallback = jest.fn(Logger);
        fizzBuzz(9, mockCallback);
        expect(mockCallback.mock.calls[0][0]).toEqual("fizz");
    });

    it('should console.log the number"', () => {
        const mockCallback = jest.fn(Logger);
        const num = 7;
        fizzBuzz(num, mockCallback);
        expect(mockCallback.mock.calls[0][0]).toBe(num);
    });

});
