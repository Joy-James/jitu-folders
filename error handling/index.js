console.log("connected");


console.log("error")
//made our own error
let marks=prompt("enter your marks");
if(Number(marks)>100 || Number(marks)<0){
    throw new Error("marks provided is invalid");
}

console.log("connected");
try{
  console.lo("error")  
}catch(err){
    console.log(err.message);
    console.log(err.name);
}


console.log("exeuted")