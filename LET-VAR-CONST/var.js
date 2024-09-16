// Difference b/w Var,Let,Const


// 1.var declaration
var input1 = 5
// 2.redeclaration
 var input1 =10
// 3.reassign
input1=15; //global variable


// _________________________________________________________________________________________

// Scope act from if,function,for

// if condition

if(true){
    input1 = 20;
    console.log(input1) //output:20
}
console.log(input1)   //output:20 it's affect global variabel


// _____________________________________________________________________________________

// function

function functionScop(){
  var input1 =4
    console.log(input1)
}
functionScop();
   
console.log(input1) //output:5 it's not affect global variabel

