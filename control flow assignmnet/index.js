// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
 if(dd<10) 
    dd=`0${dd}`;

 if(mm<=10) 

    mm=`0${mm}`;

console.log(`today is ${mm}-${dd}-${yyyy}`);
console.log(`today is ${mm}/${dd}/${yyyy}` );
console.log(`today is ${dd}-${mm}-${yyyy}`);
console.log(`today is ${dd}/${mm}/${yyyy}`);

// 2.Use any loop statement of your choice to print items from an array of your choice.
  let fruits=["mango","kiwi","orange","tangerines"]
 

 for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]) ;
    
  }
// for
let  mammals = new Array("cat","dog","human","whale","seal");
let  animalString = " ";
for (let i = 0; i < mammals. length; i++) {
   animalString += mammals[i] + " ";
}
alert(animalString);

//while
// let marks_of_students=[10,26,38,64,70,89,60];
// let i=0;
//  while ( marks_of_student[i]>=60) {
//     console.log(marks_of_students[i++]);
 

//  }

// Write a JavaScript program where the program takes a random integer between 1 and 10, 
// and the user is then prompted to input a guess number.
//  The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched"
// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to enter a guess
const guess = parseInt(prompt("Guess a number between 1 and 10"));

// Check if the guess matches the random number
if (guess == randomNumber) {
  console.log("Good Work");
} else {
  console.log("Not matched");
}


// Write a JavaScript program to find the closest value to 100 from two numerical values.


function closestTo100(num1, num2) {
  let diff1 = Math.abs(num1 - 100);
  let diff2 = Math.abs(num2 - 100);

  if (diff1 < diff2) {
    return num1;
  } else {
    return num2;
  }
}


console.log(closestTo100(95, 105)); // Output: 95
console.log(closestTo100(90, 120)); // Output: 90
console.log(closestTo100(97, 99)); // Output: 99

//Write a function to print numbers from 1 to 100, for multiple of three you should print
// “Fizz” instead of the integer and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


fizzBuzz();




