//Simplement afficher la chaîne “Hello World!”
function say () {
    console.log('Hello World');  
}

say();


//Renvoyer à l’identique le paramètre passé en entrée
function hello (txt) {
    return txt;  
}

hello('Hello World');


//Renvoyer le double de la valeur entière passée en entrée
function double (num) {
    return num * 2;
}

double(25);


//Renvoyer la multiplication de deux valeurs entières passées en entrée
function multiplication (num1, num2) {
    return num1 * num2;
}

multiplication(4, 20);


//Renvoyer, à partir d’une chaîne de caractères passée en entrée, la même
//chaîne entourée du caractère * (‘John’ => ‘*John*’)

function name (yourName) {
    return '*' + yourName + '*';
}

name('Vanessa');

