const sum = (a, b) => {
  return a + b;
};

const integerArgs = (fn) => {
  return (...args) => {
    if (args.some((arg) => !Number.isInteger(arg))) {
      throw new Error("Not a number");
    }
    return fn(...args);
  };
};

const wrappedSum = integerArgs(sum);
const result = wrappedSum(4, 3);
console.log(result);
