let age = 17;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
//Ans: Minor

let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}
// B

for (let i = 1; i <= 3; i++) {
    console.log(i);
}
//1 2 

let i = 3;

while (i > 0) {
    console.log(i);
    i--;
}

//3 2 1

for (let i = 1; i <= 5; i++) {
    if (i === 4) {
        break;
    }

    console.log(i);
}

// 1 2 3

for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}
// 1 3 4 5

let color = "red";

switch (color) {
    case "blue":
        console.log("Blue");
        break;

    case "red":
        console.log("Red");
        break;

    default:
        console.log("Unknown");
}

//Red


console.log(5 + "5");
console.log(5 - "2");
console.log("10" * 2);

let x = 0;

if (x) {
    console.log("True");
} else {
    console.log("False");
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
//even odd

let input =7;
if(input%2===0){
    console.log(`${input} is even`);
}else{
    console.log(`${input} is odd`);
}

//20 is largest
let a = 15,b = 20
if(a>b){
    console.log(`${a} is largest`);
}else{
    console.log(`${b} is largest`)
}

let i1 = 1;

while (i1 <= 3) {
    console.log(i1);
    i1++;
}

console.log(1 + 2 + "3");
console.log("1" + 2 + 3);

console.log(true + 1);
console.log(false + 1);

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

//1 2 3 4 5 6 7 8 9 10
let res = [];
for(let i=1;i<=10;i++){
    res.push(i);
}
console.log(res.join(" "));

//Print numbers from 10 to 1
{
let res = [];
for(let i=10;i>=1;i--){
    res.push(i);
}
console.log(res.join(" "));
}

//Find the sum of numbers from 1 to 10
{
    let sum=0
for(let i=1;i<=10;i++){
    sum = sum+i;
    
    
    
}
console.log(`sum of 1 to 10 is ${sum}`);

}
//Print the multiplication table of 5
for(let i=1;i<=10;i++){
    console.log(5*i);
}

//Count from 1 to 10, skipping even numbers
for(let i=1;i<=10;i++){
    if(i%2===1){
        console.log(i);
    }
}

//Check whether a number is positive, negative, or zero
let num = -5;
if(num>1){
    console.log(`${num} is positive`)
}else if(num<1){
    console.log(`${num} is negative`)
}else{
    console.log(`${num} is zero`)
}