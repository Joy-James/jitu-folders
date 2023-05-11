//global scope
let minimum_age=20;


//function scope
function checkAge(){
let age=input_age;
if(age>=minimum_age){
    console.log("you are qualified")
}
}
checkAge(20);

//block scope
for (let index = 0; index < array.length; index++) {
   console.log(index)//clg can be accessed here only not outside
    
}

//example 2
if(21>=minimum_age){
    let qualified=true;
    console.log(qualified);//we have declared it wihin a block
}

//con

function invite() {
    console.log("hello you were invited")
    
}


// export default checkAge;
export{checkAge,invite};
