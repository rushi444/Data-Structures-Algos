
//Palindrome Permutation


// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


const hasPalindromePermutation = string => {
    const setOfChars = new Set()
    
    for(let char of string){
      if(setOfChars.has(char)){
        setOfChars.delete(char)
      } else {
        setOfChars.add(char)
      }
    }
    return setOfChars.size <= 1
  }
  