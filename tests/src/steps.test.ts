// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
import { Logger, Log } from './fizzBuzz.test';

//O(n^2)
function steps(n: number, log: Log): void {

    for (let i = 1; i <= n; i++) {
        let char = '#';
        let space = ''
        log(char.repeat(i) + space.repeat(n - i));
    }
}

//O(n^2)
function step2(n: number, log: Log): void {
    for (let i = 1; i <= n; i++) {
        let step = "";

        for (let hash = i; hash > 0; hash--) {
            step += "#";
        }

        for (let space = n - i; space > 0; --space) {
            step += " ";
        }
        log(step);
    }
}

describe("Steps", () => {

    it("should console log a step shape", () => {
        const stepShape = jest.fn(Logger);
        steps(3, stepShape)
        const stepResult = stepShape.mock.calls;
        expect(stepResult[stepResult.length - 1]).toEqual(["###"]);
    });

    it("step2 should console log a step shape", () => {
        const stepShape = jest.fn(Logger);
        step2(5, stepShape);
        const stepResult = stepShape.mock.calls;
        expect(stepResult[stepResult.length - 1]).toEqual(["#####"]);
    });
});