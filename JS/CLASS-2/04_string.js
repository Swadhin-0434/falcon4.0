
// String
let name1 = "swadhin";
let name2 = "abhi";
let name3 = "akash";

let sentence = "He is a good boy"; // 16 char

// empty string "" " "
console.log(name1 + " " + name2 + " " + name3 + "\n" + sentence);

// charAt() : function
// It returns the character at the specified index in a string.

console.log(sentence.charAt(13)); // b

// length
console.log(sentence.length); // 16

let lengthCheck =
  "   Lorem  ipsum dolor sit amet consectetur adipisicing elit. Doloribus at rerum ea minus nulla itaque ab vero ad asperiores exercitationem   lorem ";
console.log(lengthCheck.length); // 134

// split()
console.log(sentence.split(" "));
console.log(sentence.toUpperCase()); // HE IS A GOOD BOY
console.log(lengthCheck);
console.log(lengthCheck.trim());
console.log(lengthCheck);



