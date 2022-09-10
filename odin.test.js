import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./odin";

test("capitalize - ass to Ass", () => {
  expect(capitalize("ass")).toBe("Ass");
});

test("capitalize - bigMan to BigMan", () => {
  expect(capitalize("bigMan")).toBe("BigMan");
});

test("reverse - re to er", () => {
  expect(reverseString("re")).toBe("er");
});

test("reverse - race to ecar", () => {
  expect(reverseString("race")).toBe("ecar");
});

test("reverse - delicious to suoiciled", () => {
  expect(reverseString("delicious")).toBe("suoiciled");
});

test("Calculator - add 1 + 2", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("Calculator - subtract 1 - 2", () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
});

test("Calculator - divide 30 / 3", () => {
  expect(Calculator.divide(30, 3)).toBe(10);
});

test("Calculator - multiple 7 * 3", () => {
  expect(Calculator.multiply(7, 3)).toBe(21);
});

test("caesarCipher - lower case - apple = crrng", () => {
  expect(caesarCipher("apple")).toBe("crrng");
});

test("caesarCipher - end of alphabet - xyz = zab", () => {
  expect(caesarCipher("xyz")).toBe("zab");
});

test("caesarCipher - uppercase letters - Apple = crrng", () => {
  expect(caesarCipher("Apple")).toBe("crrng");
});

test("caesarCipher - punctuation - Jun?(Gle! = lwp?(ing!", () => {
  expect(caesarCipher("Jun?(Gle!")).toBe("lwp?(ing!");
});

test("analyzeArray - [1,8,3,4,2,6] -> {average: 4, min: 1, max: 8, length: 6}", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
