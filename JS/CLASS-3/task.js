// todo? Print your birthday in the console using the Date object.

let My_Birthday = new Date("2003-01-26");

let yr = My_Birthday.getFullYear();
let month = My_Birthday.getMonth() + 1;
let date = My_Birthday.getDate();

console.log("The date of my birth is ", yr, month, date);


// todo? Print the current time in the console using the Date object.

let current_time = new Date();
let hr = current_time.getHours();
let min = current_time.getMinutes();
let sec = current_time.getSeconds();

console.log("The current time is ",hr,":", min,":",sec);

// todo? Print your current age in the console using the Date object.

let toDay = new Date();
let M_B = new Date("2003-01-26");

let TODAY = toDay.getFullYear();
let mb = M_B.getFullYear();
 console.log("My current age is ",TODAY - mb);

 // Q: What does the push method do in JavaScript arrays?
 // Ans : 
 // Push method adds an element into the array at the end of the array.


 // Q: What does the pop method do in JavaScript arrays?
 // Ans :
 // Pop method remove en element from the end of an array.


 //Q: Given the array let fruits = ["apple", "banana", "mango"];, what will be the result of fruits.push("orange");?
 // Ans : //[ 'apple', 'banana', 'mango', 'orange' ]
 let fruits = ["apple", "banana", "mango"];
 let new_box = fruits.push("orange");
 console.log(fruits);


 //Q: Given the array let numbers = [1, 2, 3, 4, 5];, what will let last = numbers.pop(); do?
 //Ans : It removes 5 from the given array.
 let numbers = [1, 2, 3, 4, 5];
 let last = numbers.pop();
 console.log(numbers);


 //Q: What will the following code output?
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.pop();
console.log(colors);
//Ans :it returns the array as it is ["red","green","blue"]


//Q: How can you add multiple elements to the end of an array in one push call?
// Ans : We can add multiple elements to the end of an array using one push call while we give multiple arguments to the push()
//Ex :
let color = ["red", "green", "blue"];
color.push("yellow","grey","white","pink","brown");
console.log(color);



//Q: What will be the result of the following code?
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);
//Ans : The result will be [ 1 ]


//Q: Explain the following code:
let letters = ["a", "b"];
letters.push("c", "d");
let lastLetter = letters.pop();
console.log(letters);
console.log(lastLetter);
//Ans :letters = ['a','b','c']
// lastLetter = d


//Q.How can you check the length of an array after using push or pop?
// Ans: When we do push or pop operation, we store the operation's result in a new variable and then we print it by the help of console.log() 


//Q: What will be the output of the following code?
let myArray = [10, 20, 30];
myArray.push(40);
console.log(myArray.pop());
console.log(myArray);
//Ans :// 40
      //[10, 20, 30]


// # Exercise 1: Manipulate an Array
// Create an array of numbers.
// Add a number to the end.
// Remove the first number.

let number = [0,1,2,3,4,5,6,7,8,9]
let newNumber = number.push(10);
console.log(number); // Add a number to the end
let newNumber1 = number.shift();
console.log(number); //Remove the first number 


//# Exercise 2: Combining Arrays
// Create two arrays of different fruit types.
// Merge them into one array.
// Remove any duplicate fruits.

let fruit1 = ["Apple","Orange","Watermelon","Kiwi","Banana",];
let fruit2 = ["Pineapple","Papaya","Strawberry","Banana","Apple","Kiwi"];

let mixFruit = fruit1.concat(fruit2);
console.log(mixFruit);

function noduplicate(array){
      return array.filter((el, index) => array.indexOf(el) === index);
}
console.log(noduplicate(mixFruit));