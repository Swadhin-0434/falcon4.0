// // function first (){
// //     console.log("THIS IS SWADHIN");
// // }
// // first();

// // function sum(num1, num2) {
// //     let result = num1 + num2 ;
// //     console.log(result);
// // }
// // sum ("The sum of two number is :",4,5);

// // function sub(number1,number2) {
// //     return number1 - number2;
// // }
// //  console.log(sub(90,10));

// //  //ARROW FUNCTION

// // () => {}

// // let arrow = () => {
// //     console.log("this is swadhin");
// // }
// // arrow();
// // let math = (num1, num2) => {
// //     return num1 * num2;
// // }
// // console.log(math(80,30));

// // let division = (n1,n2) => {
// //     return n1/n2;
// // }
// // let final_output = division(4,2);
// // console.log(final_output);

// // map method

let array = [0,1,2,3,4,5,6,7,8,9];
// for ( let i = 0; i < array.length; i++){
//     array[i] = array[i] * 2 ;
// }
// console.log(array);

// // hof map method
// let sum = array.map((el,i) => {
//     return el + 5;
// })
// console.log(sum);

// //filter method 

// let odd = array.filter((el,i) => {
//     return el %=2 !==0;
// });
// console.log("the odd numbers are :",odd);

//reduce method 
let add = array.reduce((el,i) => {
    return el + 10;
})
console.log(add);

//foreach method

let answer = array.forEach((el,i) => {
    console.log (el, i);
})
console.log(answer);

function oddEven(num) {
    if (num % 2 !==0) {
        return `The number is odd ${num}`;
    }else{
        return`The number is even ${num}`;
    }
}
for (let i = 0;  i < array.length; i++) {
    console.log(oddEven(array[i])); 
}

console.log(oddEven(98));