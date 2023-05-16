//Write a JavaScript program to target a given value in a nested object based on the given key.

//e.g in the object below destructure the degree key.

const user = {
id: 339,
name: 'Fred',
age: 42,
education: {
degree: 'Masters'
}

};
// Destructure the degree key from the education object
const { education: { degree } } = user;
console.log(degree); // Output: Masters

 

//2. Write a JavaScript program to check whether a given number is in a given range. e.g.
// 60, rage 50-100 returns true
function isInRange(num, min, max) {
    return num >= min && num <= max;
  }
  
  // Example usage
  console.log(isInRange(60, 50, 100)); // Output: true
  console.log(isInRange(120, 50, 100)); // Output: false
  

//   3. What is the output of the below code:

let name = "Mary";
function greetPeople(){

  let name = "Clause";

  console.log(`Hello ${name}`)

}

greetPeople()

// When we call the greetPeople function, it will log the message "Hello Clause".
//  This is because the name variable declared within the function has a local scope,
//  meaning it is only accessible within the function block. Therefore,
//  the function will use the local name variable instead of the global name variable.


// . Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// Student Name	Marks
// David	80
// Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68

// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
  ];
  
  function computeAverageMarks(students) {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
      total += students[i].marks;
    }
    return total / students.length;
  }
  
  function computeGrade(marks) {
    if (marks < 60) {
      return 'F';
    } else if (marks < 70) {
      return 'D';
    } else if (marks < 80) {
      return 'C';
    } else if (marks < 90) {
      return 'B';
    } else {
      return 'A';
    }
  }
  
  const averageMarks = computeAverageMarks(students);
  console.log(`Average marks: ${averageMarks}`);
  
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const grade = computeGrade(student.marks);
    console.log(`${student.name}'s grade: ${grade}`);
  }

//   5. We have the following arrays : 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let choice = i + 1;
  let suffix = o[choice % 10 === 1 && choice !== 11 ? 1 :
              choice % 10 === 2 && choice !== 12 ? 2 :
              choice % 10 === 3 && choice !== 13 ? 3 : 0];
  console.log(`${choice}${suffix} choice is ${color[i]}.`);
}

  