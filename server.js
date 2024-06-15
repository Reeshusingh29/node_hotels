/*
function add(a,b){
    return a+b;
}

var result= add(3,4)
console.log(result)

//type 2 of function 
var add=function(a,b){
    return a+b;
}
var result= add(3,4)
console.log(result)

//type3: using arrow function
var add=(a,b)=>{
    return a+b;
}
var result= add(3,4)
console.log(result)

//Type 4: arrow function type2
var add=(a,b)=>a+b;
var result= add(3,4)
console.log(result)

//Type 5
(function(){
    console.log("I am an anonymous function")
})();


//Callback function example 

function Callback(){
    console.log("now adding is successful complete");
}

const add=function(a,b,Callback){
    var result=a+b;
    console.log('result'+result);  //main function work complete then after this callback function will work
    Callback();
}
add(3,4,Callback);
//ek function k andar ek aur function ko call karne ko hi callback kehte hai 
*/
//type 2 of above example

add(2,3,function(){
    console.log("add complete");
})
