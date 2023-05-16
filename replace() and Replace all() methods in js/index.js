//replace () string method

const my_string = "I like dogs because dogs are adorable!";

let my_new_string = my_string.replace("dogs","cats");

console.log(my_new_string);

// // The only way to perform global substitution with the replace() method
// // is to use a regular expression with the g flag:
// const greet = "HELLO Mumbi, hello Kanja, hello Joy!";
// let  new_greetings = greet.replace(/hello/g, "hi");

// console.log(new_greetings); // Output: "Hello, hi, hi!"

// // universal flag /gi to make it not case sensitive
// const str = "Hello Mumbi, hello Kanja, hello Joy!";
// const newStr = str.replace(/hello/gi, "hi");
// console.log(newStr); // Output: "hi, hi, hi!"



// // string.replace (searchstring, replacerfunction)
// let text="Mr BLUE has a blue  house and a blue car"
// let result=text.replace("blue" ,(match)=>{
//     return match.toUpperCase();
// });
// console.log(result);



// //replace all () string method

// const my_string = "I like dogs because dogs are adorable!";

// let my_new_string = my_string.replaceAll("dogs","cats");

// console.log(my_new_string);

//  //regular expresssion in replaceAll()
// const greet = "HELLO Mumbi, hello Kanja, hello Nyoro!";
// let  new_greetings = greet.replaceAll(/hello/g, "hi");

// console.log(new_greetings); // Output: "Hello, hi, hi!"

// // /gi to make it not case sensitive
// const str = "HELLO Mumbi, hello Kanja, hello Nyoro!";
// const newStr = str.replaceAll(/hello/gi, "hi");
// console.log(newStr); // Output: "hi, hi, hi!"







