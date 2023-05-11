// function getUserDetails(){
//     let full_names=prompt("Enter your full names");
//     let age=prompt ("enter your age");
    
    
//     const human={
//       full_names:full_names,
//         age:age
//     };
  
// }
// let human=getUserDetails();
// console.log(human);

// function bmiCalculator(weight, height){
//     return =weight/(height**2);
// }
// let bmi= bmiCalculator(65 ,1.7);
// console.log(bmi)


// //anonymous functions
// function(){
//     console.log("hello anonymous function")
// }


//arrow function
// const arrow = ()=>63/(1.7**2);
// console.log(arrow());

//1. Write a JavaScript program to delete the rollno property from the following object.

const student = {

name : "David Rayy",
sclass : "VI",
rollno : 12 };
console.log(student);
delete student.rollno;
console.log(student);

// 2. Write a JavaScript program to calculate the area of a circle.

const pie=3.142;
let radius=4;
area= pie* (radius**2);
console.log(area);

// 3. Write a JavaScript function to validate whether a given value type is boolean or not
function isBoolean(value) {
    return typeof value === 'boolean';
  }
  
  console.log(isBoolean(true)); 
  console.log(isBoolean(false));