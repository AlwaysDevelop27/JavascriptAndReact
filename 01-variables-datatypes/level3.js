//Level 3 — Find the mistake

/*
const price = 100;
price = 200; //here price is declared as const, so we cant change it

console.log(price);

/*
let 2name = "Ravi";
console.log(2name); //cant name with numbers in the start, it should be camel case
*/
/*
if (true) {
  let message = "Hello";
}

console.log(message); //here let is block specific, console.log is inside the if condition, we can get the answer as hello
//or else it throws error
*/

//Write a program that declares two numbers, adds them, and prints the result.

let num1 = 100;
let num2 = 200;

let num3 = num1+num2;

console.log(num3);

//Write a program that stores your name, age, and whether you are a student, then prints each value and its data type.
let name = "sharanya";
let age = 33;
let student = true;

if(age > 25){
    console.log(`${name} is a student and it is  ${student}` );
}else{
    console.log(`${name} is not a student and it is ${student}` );
}

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(student));
