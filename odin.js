const capitalize = (string) =>
  string.replace(string.charAt(0), string.charAt(0).toUpperCase());

const reverseString = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
};

const Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

//First we translate all of our characters
//to numbers, 'a'=0, 'b'=1, 'c'=2, ... , 'z'=25
//z = 122
const caesarCipher = (string) => {
  let final = "";
  for (let i = 0; i < string.length; i++) {
    let current = string.toLowerCase().charCodeAt(i);

    //if charcode is less than or greater than the codes of alphabet,
    //just pass as is
    if (current >= 97 && current <= 122) {
      //customize the shift in characters here
      current = current + 2;
      if (current > 122) {
        current = current - 122 + 96;
      }
    }

    final += String.fromCharCode(current);
  }
  return final;
};

const analyzeArray = (array) => {
  return {
    average: array.reduce((a, c) => a + c, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
