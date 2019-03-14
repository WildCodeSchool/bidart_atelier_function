//Renvoyer à l’identique le paramètre passé en entrée
function Hello(){
console.log("hello world")
}

Hello()

//Simplement afficher la chaîne “Hello World!”
function say(i){
    return i;
}

console.log(
    say("the world is mine")
)

//Renvoyer le double de la valeur entière passée en entrée
function double(num){
    return num*2
}

console.log(
    double (4)
)

//Renvoyer la multiplication de deux valeurs entières passées en entrée
function multiplication (num1, num2) {
    return num1 * num2;
}

console.log(
    multiplication(4, 8)
);


//Renvoyer, à partir d’une chaîne de caractères passée en entrée, la même
//chaîne entourée du caractère * (‘John’ => ‘*John*’)

function name (yourName) {
    return '*' + yourName + '*';
    
}

console.log (
    name ('sarah')
);
