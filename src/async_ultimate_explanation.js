function foo(){

    new Promise.resolve().then(() => console.log(1));

    setTimeout(() => console.log(2));

    new Promise.resolve().then(() => console.log(3));

    console.log(4);

}


foo();

console.log(5);

// 4 5 1 3 2