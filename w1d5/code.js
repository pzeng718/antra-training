// #1
function reverse(num) {
  return num.toString().split("").reverse().join("");
}

// #2
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// #3
function allSubstrings(str) {
  let result = new Set();
  for (let length = 1; length <= str.length; length++) {
    for (let i = 0; i <= str.length - length; i++) {
      result.add(str.substring(i, i + length));
    }
  }
  return result;
}

// #4
function returnWordInAlphaOrder(word) {
  return word.split("").sort().join("");
}

// #5
function upperFirstChar(sentence) {
  return sentence
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join(" ");
}

// #6
function longestWord(sentence) {
  return sentence.split(" ").sort((a, b) => b.length - a.length)[0];
}

// #7
function vowelCount(string) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of string) {
    if (vowels.includes(char.toLowerCase())) count++;
  }

  return count;
}

// #8
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// #9
function getType(variable) {
  return typeof variable;
}

// #10
function getNByNIdentity(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    result.push(row);
  }

  return result;
}

// #11
function getSecondLargestAndSmallest(arr) {
  let sortedArr = arr.sort();
  return [sortedArr[1], sortedArr[sortedArr.length - 2]];
}

// #12
function isPerfect(num) {
  return num === getDivisors(num).reduce((prev, acc) => prev + acc, 0);
}

function getDivisors(num) {
  let divisors = [];
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
}

// #13
function getFactors(num) {
  return [...getDivisors(num), num];
}

// #14
function toCoins(amt, coins) {
  let result = [];
  for (let coin of coins) {
    while (amt >= coin) {
      amt -= coin;
      result.push(coin);
    }
  }

  return result;
}

// #15
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the base (b): ", (baseInput) => {
//   rl.question("Enter the exponent (n): ", (expInput) => {
//     const b = parseFloat(baseInput);
//     const n = parseInt(expInput);
//     const result = Math.pow(b, n);

//     console.log(`${b} raised to the power of ${n} is ${result}`);
//     rl.close();
//   });
// });

// #16
function uniqueChars(string) {
  let result = [];
  let set = new Set();
  for (let char of string) {
    if (!set.has(char)) {
      set.add(char);
      result.push(char);
    }
  }
  return result.join("");
}

// #17
function countOccurences(str) {
  let countMap = {};
  for (let char of str) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  return countMap;
}

// #18
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// #19
function largerElementsInArr(arr, num) {
  return arr.filter((n) => n > num);
}

// #20
function generateRandomStr(num) {
  let randomChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  let result = "";
  for (let i = 0; i < num; i++) {
    result += randomChar[Math.floor(Math.random() * randomChar.length)];
  }

  return result;
}

// #22
function countOccuranceInStr(str, target) {
  let count = 0;
  for (let char of str) {
    if (char === target) count++;
  }

  return count;
}

// #23
function firstNonrepeatChar(str) {
  for (let char of str) {
    if (countOccuranceInStr(str, char) === 1) return char;
  }

  return "";
}

// #24
function bubbleSort(arr) {
  let numsLeftToCompare = arr.length;
  while (numsLeftToCompare > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
    numsLeftToCompare--;
  }

  return arr;
}

// #25
function longestCountryName(countryNames) {
  return countryNames.sort((a, b) => b.length - a.length)[0];
}

// #26
function longestSubstrWithoutRepeat(str) {
  let seen = new Map();
  let start = 0;
  let maxLength = 0;
  let longest = "";

  for (let end = 0; end < str.length; end++) {
    let char = str[end];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, end);

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longest = str.slice(start, end + 1);
    }
  }

  return longest;
}

// #27
function longestPalindrome(str) {
  let longest = "";
  function expandFromCenter(left, right) {
    while (left > 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  }
  for (let i = 0; i < str.length; i++) {
    let odd = expandFromCenter(i, i);
    if (odd.length > longest.length) {
      longest = odd;
    }

    let even = expandFromCenter(i, i + 1);
    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
}

// #28
function takeFunction(fn) {
  fn();
}

// #29
function getFunctionName(fn) {
  return fn.name;
}

console.log(longestPalindrome("abacdedca"));
