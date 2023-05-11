const minimum_age=18;

console.log("############")
function checkAge(){
    let age=input_age;

    function invite() {
        let age=12;
        console.log("hello you were invited")
        console.log(age);
        
    }


    if(age>=minimum_age){
        console.log("you are qualified")
        invite()
    }
    console.log(age);
    }
    checkAge(20);
    console.log("############")