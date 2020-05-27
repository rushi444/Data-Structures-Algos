//Palindrome Permutation

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

// const hasPalindromePermutation = string => {
//   const letterCounts = {};
//   let palindromeSum = 0;
//   for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     letterCounts[letter] = letterCounts[letter] || 0;
//     letterCounts[letter]++;
//   }
//   for (let letterCount in letterCounts) {
//     palindromeSum += letterCounts[letterCount] % 2;
//   }

//   return palindromeSum < 2;
// };



const hasPalindromePermutation = string => {
  const setOfChars = new Set();

  for (let char of string) {
    if (setOfChars.has(char)) {
      setOfChars.delete(char);
    } else {
      setOfChars.add(char);
    }
  }
  return setOfChars.size <= 1;
};

console.log('civic', hasPalindromePermutation('civic'))
console.log('civil', hasPalindromePermutation('civil'))