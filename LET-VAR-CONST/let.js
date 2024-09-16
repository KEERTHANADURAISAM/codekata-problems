// Difference b/w Var,Let,Const


// 1.let declaration
let input1 = 5
// 2.redeclaration
// Cannot redeclare block-scoped variable 'input1
// let input1 =10
// ERROR:

// const.js:8 Uncaught 
// SyntaxError: Identifier 'input1' has already been declared (at let.js:8:5)

// 3.reassign
input1=15;

console.log(input1)


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
