// //Sort the below array of employees in ascending order by age

// let employees = [

//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 27,
//         joinedDate: 'December 15, 2017'
//     },

//     {

//         firstName: 'Ana',
//         lastName: 'Rosy',
//         age: 25,
//         joinedDate: 'January 15, 2019'
//     },

//     {

//         firstName: 'Zion',
//         lastName: 'Albert',
//         age: 30,
//         joinedDate: 'February 15, 2011'
//     }

// ];
// employees.sort((a, b) => {
//     return a.age - b.age;
// });
// employees.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName} ${e.age}`);
// });

// //Write a JavaScript function to get the last element of an array. 
// //Passing the parameter 'n' will return the last 'n' elements of the array.
// function getLastElements(arr, n) {
//     if (n === undefined || n >= arr.length) {
//       return arr.slice(-1)[0];
//     } else if (n <= 0) {
//       return [];
//     } else {
//       return arr.slice(-n);
//     }
//   }
//   const array = [1, 2, 3, 4, 5];

//   console.log(getLastElements(array));       // Output: 5
//   console.log(getLastElements(array, 1));    // Output: 5
//   console.log(getLastElements(array, 3));    // Output: [3, 4, 5]
//   console.log(getLastElements(array, 6));    // Output: [1, 2, 3, 4, 5]
//   console.log(getLastElements(array, 0));    // Output: []
//   console.log(getLastElements(array, -2));   // Output: []
    
//   //Write a JavaScript program that prints the elements of the following array.
// //Note : Use nested for loops.
// const a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
//   ];
  
//   for (let i = 0; i < a.length; i++) {
//     console.log("row " + i);
//     for (let j = 0; j < a[i].length; j++) {
//       console.log(" " + a[i][j]);
//     }
//     console.log("------");
//   }

//   4. Write a JavaScript function to find the difference between two arrays.

// Test Data:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

  function difference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const diff = [...set1].filter((item) => !set2.has(item));
   
    const diffStrings = diff.map(String);
  
    return diffStrings;
  }
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));

  //Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function filter_array_values(arr) {
    const filteredArray = arr.filter((item) => {
      if (item === false || item === null || item === 0) {
        return false;
      }
      
      if (typeof item === 'string' && item.trim() === '') {
        return false;
      }
      
      return true;
    });
  
    return filteredArray;
  }
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

  
  