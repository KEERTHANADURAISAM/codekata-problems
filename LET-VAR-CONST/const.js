// Difference b/w Var,Let,Const


// 1.const declaration
// const input1;
// const' declarations must be initialized.ts(1155)

const input1=5;

// 2.redeclaration
// Cannot redeclare block-scoped variable 'input1'
// ERROR:

// const.js:8 Uncaught 
// SyntaxError: Identifier 'input1' has already been declared (at let.js:8:5)

// const input1 =10

// 3.reassign
// input1=15;
// const.js:20 Uncaught TypeError: Assignment to constant variable.

console.log(input1)

// _________________________________________________________________________________________

// Scope act from if,function,for

// if condition

if(true){
   const input1 = 20;
    console.log(input1) //output:20 it's only working with if block
}
console.log(input1)   //output:5 it's not affect global variabel


// _____________________________________________________________________________________

// function

function functionScop(){
    const input1 =4
    console.log(input1)
}
functionScop();
   
console.log(input1) //output:5 it's not affect global variabel

// _________________________________________________________________________________________

// Object  same thing happends in obj

