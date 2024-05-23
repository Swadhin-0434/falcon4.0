// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Traditional method 

let student = {
    name: "Swadhin",
    age : 21,
    city:"Bhubaneswar",
    marks: [90,98,90],
    isMarried: false,
    address: {po:"RRL",pin:754031},
};
// console.log(student);

//  Constructor :
// let newStudent = new Object();
// newStudent.name = "Swadhin";
// newStudent.age = 21;
// newStudent.city = "Bhubaneswar"
// newStudent.marks = [90,98,90];
// newStudent.isMarried = false;
// newStudent.address = { po:"RRL", pin: 754031};
// console.log(newStudent);

// Accessing object :

// myarray[0]
// console.log(newStudent.name); // dot notation
// console.log(newStudent["marks"]); // bracket notation
// console.log(newStudent.address);
// console.log(newStudent.city);

// console.log(typeof newStudent);

 // Modifying object :
//  console.log(student);
//  student.name = "Banty";
//  student.age = 90;
//  student.isMarried = true;
//  student.address = { po:"Mugagahira", pin : 754312}
//  student.marks = [80,89,87];
//  student.city = "Cuttack";
//  console.log(student);


 // Deleting object :
 delete student.age;
 console.log(student);
 student.age = 21;
 console.log(student);


 //Object keys

 let keys = Object.keys(student);
 console.log(keys);  //it gives the only keys [ "name","city", "marks","isMarried","address"]

 //Object values
 let value = Object.values(student);
 console.log(value); // it gives you the values

 //Object entries
 let entry = Object.entries(student);
 console.log(entry); // it gives you both keys and values