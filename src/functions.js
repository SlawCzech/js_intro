// named function:

// function add(x, y) {
//     return x + y;
// }
//
// const result = add(3,5);
// console.log(result)

// anonymous functions:
// classic one

// function expression (przypisanie dunkcji do zmiennej
// nie podlega hoistingowi
// const add2 = function (x, y) {
//     return x + y
// }
//
// console.log(add(2, 3));

// function range(start, stop, step=1){
//     if (stop === undefined) {
//         stop = start;
//         start = 0;
//     }
//
//     const temp = [];
//     let counter = 0;
//
//     while (temp.length < stop){
//         temp.push(counter)
//         counter++;
//     }
//     return temp;
// }
//
//
// console.log(range(10));
// // console.log(range(2, 10));
// // console.log(range(2, 10, 3));
//
// function range(start, stop, step=1){
//     if (stop === undefined) {
//         stop = start;
//         start = 0;
//     }
//
//     const temp = [];
//     let counter = start;
//
//     while (temp.length < stop - start){
//         temp.push(counter)
//         counter++;
//     }
//     return temp;
// }
//
// console.log(range(5, 10));
//
// function range(start, stop, step=1){
//     if (stop === undefined) {
//         stop = start;
//         start = 0;
//     }
//
//     const temp = [];
//     let counter = start;
//
//     while (temp.length < (stop - start) / step){
//         temp.push(counter)
//         counter+=step;
//     }
//     return temp;
// }
//
// console.log(range(2, 10, 3));
//
//
// function range(start, stop, step=1){
//     if (stop === undefined) {
//         stop = start;
//         start = 0;
//     }
//
//     const temp = [];
//     let counter = start;
//
//     while (temp.length < (stop - start) / step){
//         temp.push(counter)
//         counter+=step;
//     }
//     return temp;
// }
//
// console.log(range(10, 2, -1));
//
//
// function range(start, stop, step=1){
//     if (stop === undefined) {
//         stop = start;
//         start = 0;
//     }
//
//     const temp = [];
//     let counter = start;
//
//     while (temp.length < (stop - start) / step){
//         temp.push(counter)
//         counter+=step;
//     }
//     return temp;
// }
//
// console.log(range(10, 2,));


// Arrow functions
//named function:
function add(a, b) {
    return a + b;
}
// anonymous function classic:
const add1 = function(a, b) {
    return a + b;
}

// arrow function:
const add2 = (a, b) => {
    return a + b;
}

// arrow with params:
const magic = a => {}
const magic2 = (a, b) => {}
const magic3 = () => {}

// arrow with implicit return:
const magic4 = () => {
    //explicite return
    return 42;
}
const magic5 = () => 42; // no curly braces!


const is_palindrome = (text) => {
    return text.toLowerCase() === text.toLowerCase().split('').reverse().join('');
};

//oneliner
const is_palindrome2 = (text) => text.toLowerCase() === text.toLowerCase().split('').reverse().join('');


console.log(is_palindrome('Ala'));
console.log(is_palindrome('kajak'));
console.log(is_palindrome('dupa'));

console.log(is_palindrome2('Ala'));
console.log(is_palindrome2('kajak'));
console.log(is_palindrome2('dupa'));


const hello = (name) => `Czesc ${name[0].toUpperCase() + name.slice(1).toLowerCase()}, moj panie!`

console.log(hello('andrzej'));
