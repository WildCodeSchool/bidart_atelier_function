function text(){

    return "Hello World";
}
console.log(string);
//////////////////////////
function text(string){

    return string;
}
const string = "Hello World";
console.log(string);

///////////////////////////
function text(string){
    
    return string * 2;
}
const string = text();
console.log(string);

/////////////////////////////

function text(a, b){
    return a * b;
}
let line = third(3,4);
console.log(line);

///////////////////////////////

function text(a){
    return "* " + a + " *";
}
let line = fourth("John");
console.log(line)