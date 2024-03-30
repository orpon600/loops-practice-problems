/**
 ------------------
 Loop
-------------------
1. Display "Ajke amr mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. Show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days
display then as output
7. Create an array for all the mobile phones. Display all the elements of 
the by using a while loop
8. Run  a loop from 30 to 86. this loop will stop if the values get higher than 44
9. Write the price of the book that you have. Display the prices if the prices if the prices is lower than 200



 */

// 1. Display "Ajke amr mon valo nei" for 39 times
var roastGiven = 0;
while (roastGiven < 39) {
  //   console.log("Ajke amr mon valo nei");
  roastGiven++;
}

// 2. Display numbers between 58 to 98
var number = 58;
while (number < 99) {
  //   console.log(number);
  number++;
}

// Show all even numbers from 412 to 456
var Number = 412;
while (Number <= 456) {
  //   console.log(Number);
  //   Number++;
  Number = Number + 2;
}

// 4. Show all odd numbers 581 to 623
var Number = 581;
while (Number <= 623) {
  //   console.log(Number);
  //   Number++;
  Number = Number + 2;
}

// 5. Difference between while loop and for loop
for (var i = 0; i <= 20; i += 2) {
  //   console.log(i);
}

// 6. Declare an array for all the topics that you have learned last few days
// display then as output

var items = ["HTML", "CSS", "JavaScript", "Tailwind"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  // console.log(item);
}

// 7. Create an array for all the mobile phones. Display all the elements of
// the by using a while loop
const mobilePhones = [
  "Samsung Galaxy S23 Ultra",
  "Apple iPhone 14 Pro Max",
  "Google Pixel 7 Pro",
  "Xiaomi 13 Pro",
];

// Initialize loop counter
var i = 0;

// Loop through the array using a while loop
while (i < mobilePhones.length) {
  // console.log(mobilePhones[i]);
  i++;
}

// 8. Run  a loop from 30 to 86. this loop will stop if the values get higher than 44
for (var i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  // console.log(i);
}

// 9. Write the price of the book that you have. Display the prices  if the prices is lower than 200

const bookPrice = [150, 240, 100, 80];
for (let i = 200; i > bookPrice.length; i++) {
  const element = bookPrice[i];
  if (i < 200) {
    break;
  }
  // console.log(element);
}

/**
 ----------
 VARIABLE
 ----------
 1. What is JavaScript?
*JavaScript is the Programming Language for the Web.
*JavaScript can update and change both HTML and CSS.
*JavaScript can calculate, manipulate and validate data.

 2. How does JS works?
JS primarily runs in web browsers. When you visit a website, the browser downloads the HTML content, CSS for styling, and JavaScript code.
Each browser has a built-in JavaScript engine (like Chrome's V8 or Firefox's SpiderMonkey) responsible for interpreting and executing JS code.
Interpreted vs. Compiled Languages:

 3. What is Variable?
In JavaScript, a variable is a named container that stores data. It's like a labeled box where you can keep information and refer to it later
using the variable's name.

 4. How to declare a variable in JavaScript?
You can declare a variable in two ways:
*With the keyword var . For example, var x = 42 . This syntax can be used to declare both local and global variables, depending on the execution context.
*With the keyword const or let . For example, let y = 13 . This syntax can be used to declare a block-scope local variable.

 5. Types of Varible? How can you find out type of a varible
let x = 25;
console.log(typeof x); // Output: number

let name = "Bard";
console.log(typeof name); // Output: string

let isTrue = true;
console.log(typeof isTrue); // Output: boolean

 6. Primitive and non-primitive date types
*The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol
*The Non-Primitive data type has only one member  the Object.

 7. Naming Convention of JS variables
Variable names must start with a letter, an underscore ( _ ) or a dollar sign ( $ ).
Variable names cannot contain spaces.
Variables cannot be the same as reserved keywords such as if or const .
By convention, JavaScript variable names are written in camelCase.

 8. math Operation of JS variables

 9. Short hand: +=, -=, *=, /=
 8-2=6
 8-=2
 10. ++, --
 11. parseint, parseFloat

 12. toFixed
 */

/*
 ----------
 ARRAY
 -----------
 1. What is the purpose?
 2. How to declare an array in JS
 3. Number of elements in an Array
 4. What is index?
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits[0]; // firstFruit will be "apple" (because index 0)


 5. Find the value of an element by index
let fruits = ["apple", "banana", "orange", "mango"];
let firstFruit = fruits[0];  // firstFruit will be "apple"

let lastFruit = fruits[fruits.length - 1];  // Accessing the last element

console.log(fruits[2]);  // Output: "orange" (assuming fruits hasn't been modified)



 6. Change an element by index 
let colors = ["red", "green", "blue", "purple"];

colors[1] = "yellow";  // Change the second element (index 1) to "yellow"

console.log(colors);  // Output: ["red", "yellow", "blue", "purple"]


 7.get the index of an element by the value

 8. what does it mean when you get undefiend while getting the value of an element
 A variable that has not been assigned a value is of type undefined

 9.how can you add an element to an array at the last position
let animals = ["cat", "dog", "bird"];
animals.push("fish");  // Add "fish" to the end
console.log(animals);  // Output: ["cat", "dog", "bird", "fish"]


 10. How can you remove the last element from array
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();  // Removes "orange" and stores it in lastFruit
console.log(fruits);  // Output: ["apple", "banana"]
console.log(lastFruit);  // Output: "orange"


 11. add an element at the first position of an array
let vegetables = ["potato", "carrot", "broccoli"];
vegetables.unshift("tomato"); // Add "tomato" to the beginning
console.log(vegetables);  // Output: ["tomato", "potato", "carrot", "broccoli"]


 12. Remove the first element of an array
let fruits = ["apple", "banana", "orange", "mango"];
let firstFruit = fruits.shift(); // Remove and store the first element ("apple")

console.log(fruits);  // Output: ["banana", "orange", "mango"]
console.log(firstFruit); // Output: "apple" (the removed element)


 */

/**
  ---------
  CONDITIONALS
  ---------
  1. meaning of: >, <, >=, <=, ==, !=, ===, !==,
  2. Meaning of &&
   2 tai same ba soman

  The logical AND ( && ) (logical conjunction) operator fo
  a set of boolean operands will be true if and only if all the operands are true.
  Otherwise it will be false .
  3. meaning of ||
  The logical OR ( || ) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. 
   It is typically used with boolean (logical) values.
  4. lets say have x amount of money. if you have more then 80,000, then if more than 60,000 
  then you will by gaming laptop
  if more then 60,000 then you will by gaming laptop
  if you more then 40,000 then you will by lanovo yoga
  if you have more then 20, 000 then you will by an used laptop
  otherwise, you will use you mobile phone
  */

var x = 50000;

if (x > 80000) {
  // This condition seems a bit redundant as it's very high and doesn't lead to a different outcome than the >60000 condition
  console.log(
    "You have a lot of money, consider buying a high-end gaming laptop."
  );
} else if (x > 60000) {
  console.log("You can buy a gaming laptop.");
} else if (x > 40000) {
  console.log("You can buy a Lenovo Yoga.");
} else if (x > 20000) {
  console.log("You can buy a used laptop.");
} else {
  console.log("It's best to use your mobile phone for now.");
}
