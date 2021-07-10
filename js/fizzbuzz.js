const fizzbuzz = (val1, val2) => {
  let resultArr = [];
  for (let i = val1; i <= val2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArr.push("Fizz");
    } else if (i % 5 === 0) {
      resultArr.push("Buzz");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
};

const fizzbuzz2 = (val1, val2) => {
  let resultArr = [];
  for (let i = val1; i <= val2; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
      resultArr.push("FooBoo");
    } else if (i % 7 === 0) {
      resultArr.push("Foo");
    } else if (i % 11 === 0) {
      resultArr.push("Boo");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
};

const fizzbuzz3 = (val1, val2) => {
  let resultArr = [];
  for (let i = val1; i <= val2; i++) {
    if (i <= 16) {
      resultArr.push("Small");
    } else if (i >= 95) {
      resultArr.push("Big");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
};

const reverseFizzbuzz = (val1, val2) => {
  let resultArr = [];
  for (let i = val1; i <= val2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("BizzFuzz");
    } else if (i % 3 === 0) {
      resultArr.push("Buzz");
    } else if (i % 5 === 0) {
      resultArr.push("Fizz");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
};

const fizzbuzz4 = (val1, val2) => {
  let resultArr = [];
  for (let i = val1; i <= val2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FTW");
    } else if (i % 3 === 0 || i % 5 === 0) {
      resultArr.push("GG");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
};

// Call and use fizzbuzz function
function buzzIt() {
  let output = [];
  let val1 = document.getElementById("fizzValue").value;
  let val2 = document.getElementById("buzzValue").value;
  output = fizzbuzz(val1, val2);
  document.getElementById("results").innerHTML = output.join(" ");
  document.getElementById("fizzValue").value = "";
  document.getElementById("buzzValue").value = "";
}

module.exports = { fizzbuzz, fizzbuzz2, fizzbuzz3, reverseFizzbuzz, fizzbuzz4 };
