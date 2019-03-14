// -----------------------------------------------------------
// ATELIER FUNCTION
// HELLO WORLD 

function helloWorld(){
    console.log("Hello world!");
}

helloWorld();

// ------------------------------------------------------------------

// SAME

function same(a){
    return a;
}

let resultOne = same("jamiroquai");
console.log(resultOne);

// -----------------------------------------------------------

// DOUBLE 

function double(num){
    return num * 2;
}

let result = double(4);
console.log(result);

// -----------------------------------------------------------
// MULTIPLE

function multiple(num1, num2){
    return num1 * num2;
}

let resultMultiple = multiple(7, 8);
console.log(resultMultiple);

// -----------------------------------------------------------
// CHARACTER **

function character(theCharacter){
    return '*' + theCharacter + '*';
}

let resultCharacter = character("john");
console.log(resultCharacter);

// -----------------------------------------------------------

// FAT ARROW FUNCTION FOR THE FUN 

const sameArrow = (b) => {
    return b;
}

const resultSameArrow = sameArrow("testsame");
console.log(resultSameArrow);

// -----------------------------------------------------------

const multipleArrow = (num1, num2) => num1 * num2;
let multipleArrowResult = multipleArrow(4, 9);
console.log(multipleArrowResult);

// -------------------------------------------------------------------


