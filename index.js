// Target Sum
// Given an array of integers, and positive integer (target), write a function called target_sum that returns an array containing the indices of the two numbers that add up to the target.
// Assumptions:
// 1)	There is only one correct pair in the given array.
// 2)	It’s possible that a correct pair doesn’t exist in the given array, in which case return an empty array.
// Example: target_sum( [1,6,0,23,8,7], 9 ) should return [0, 4]
// []

const target_sum = (arr, target) => {
  let obj = {};

  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }

  for (i = 0; i < arr.length; i++) {
    let a = target - arr[i];
    if (obj[a]) {
      return [i, obj[a]];
    }

  }
return [];
};

console.log(target_sum([6, 1, 0, 23, 8, 7], 9));

// Pattern Match
// Write a function called pattern_match that takes a string (sample) and an array of strings of the same length as the sample.
// The function should return an array of matching patterns. The sample string is an alphanumeric code; the characters themselves
// do not matter.
// abb == cdd
// abb != bab
// abb == baa
// Example: pattern_match( ["abc","deq","mee","aqq","dkd","ccc"], “abb” ) should return ["mee","aqq"].
const pattern_match = (arr, sample) => {
  const helper = str => {
    let obj = {};
    let split = str.split('');
    let result = [];
    let counter = 0;
    for (let i = 0; i < split.length; i++) {
      if (obj[split[i]]) {
        result.push(obj[split[i]]);
      } else {
        obj[split[i]] = counter;
        result.push(obj[split[i]]);
        counter++;
      }
    }
    return result.join('');
  };

  let finalResult = [];
  let sampleNumber = helper(sample);

  for (let j = 0; j < arr.length; j++) {
      console.log(j)
    console.log(helper(arr[j]))
    if (helper(arr[j]) === sampleNumber) {
      finalResult.push(arr[j]);
    }
  }
  return finalResult;
};
console.log(pattern_match(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'));
