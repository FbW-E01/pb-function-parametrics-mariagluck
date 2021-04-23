// Create a function sum which accepts any amount of numbers and return the sum of their addition


const sum = (...numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  };

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

// ALSO this one works!!
// const sum = (...args) => [...args].reduce((a, b) => a + b, 0);


// ANSWER: it prints:
// 1
// 16
// 70