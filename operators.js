let num1;
let num2;

num1=10;
num2=5;

console.log('The sum is:', num1 + num2);
console.log('subtraction:', num1 - num2);
console.log('Multiplication:', num1 * num2);
console.log('Division:', num1 / num2);
console.log('Modulus:', num1 % num2);

//increment
console.log('Increment num1:', num1++);
console.log('Increment num2:', num2++);

//decrement
console.log('Decrement num1:', num1--);
console.log('Decrement num2', num2--);

//prompt function
let input1=parseFloat(prompt('Enter the first input'));
let input2=parseFloat(prompt('Enter the second input'));

const sum=input1+input2;
const sub=input1-input2;
const mul=input1*input2;
const div=input1/input2;
const mod=input1%input2;

console.log('Sum of input values', sum);
console.log('Subtraction of input values', sub);
console.log('Multiplication of input values', mul);
console.log('Division of input values', div);
console.log('modulus of input values', mod);