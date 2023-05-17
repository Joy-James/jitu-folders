// A string is a palindrome if it is read the same from forward or backward.
// For example, dad reads the same either from forward or backward. So the word dad is a palindrome. 
// Similarly, madam is also a palindrome. 
// Write a JavaScript function to determine whether a given string is a palindrome
// program to check if the string is palindrome or not

function checkPalindrome(string) {

    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

const string = prompt('Enter a string: ');

checkPalindrome(string);

// Write a function to check whether two given strings are anagram of each other or not. 
// An anagram of a string is another string that contains the same characters,
//  only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.
function areAnagrams(str1, str2) {
    const cleanedStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  console.log(areAnagrams('abcd', 'dabc')); // true
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('Eleven plus two', 'Twelve plus one')); // true


// Write a JavaScript function to check whether a string is blank or not.
function isBlank(str) {
    return str.trim() === '';
  }
  console.log(isBlank('')); // true
  console.log(isBlank('    ')); // true
  console.log(isBlank('Hello')); // false
  console.log(isBlank('   Hello   ')); // false


//   Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
function protect_email(email) {
    const atIndex = email.indexOf('@');
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    const usernameLength = username.length;
    
    let protectedUsername = '';
    
    if (usernameLength <= 2) {
      protectedUsername = username.charAt(0) + '...';
    } else if (usernameLength <= 5) {
      protectedUsername = username.charAt(0) + '...'+ username.charAt(usernameLength - 1);
    } else {
      protectedUsername = username.slice(0, 3) + '...' + username.slice(-2);
    }
    
    return protectedUsername + domain;
  }
  console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"

//   Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."
function reverseWords(str) {
    if (typeof str !== 'string') {
      return 'It must be a string.';
    }
    
    const words = str.split(' ');
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
    
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }
  console.log(reverseWords('abc')); 
console.log(reverseWords('JavaScript Exercises')); 
console.log(reverseWords(1234)); 

  