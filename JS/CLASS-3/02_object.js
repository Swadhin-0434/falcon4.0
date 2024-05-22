// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Traditional method 

// let student = {
//     name: "Swadhin",
//     age : 21,
//     city:"Bhubaneswar",
//     marks: [90,98,90],
//     isMarried: false,
//     address: {po:"RRL",pin:754031},
// };
// console.log(student);

//  Constructor :
let newStudent = new Object();
newStudent.name = "Swadhin";
newStudent.age = 21;
newStudent.city = "Bhubaneswar"
newStudent.marks = [90,98,90];
newStudent.isMarried = false;
newStudent.address = { po:"RRL", pin: 754031};
console.log(newStudent);

// Accessing object :

// myarray[0]
console.log(newStudent.name); // dot notation
console.log(newStudent["marks"]); // bracket notation
console.log(newStudent.address);
console.log(newStudent.city);

console.log(typeof newStudent);

 