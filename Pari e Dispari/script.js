// Prendo due variabili. La scommessa e il numero dell'utente
var scommessa = prompt("Pari o dispari?").toLowerCase();// to lower case mette tutto in minuscolo. facilita il confronto successivo nell'if evitando errori per via del case sensitive

console.log(scommessa);

// trasformo la scommessa in un valore booleano: true se l'utente ha scelto pari, false se ha scelto Dispari

if (scommessa == "pari"){
  scommessa = true;
} else if (scommessa =="dispari"){
  scommessa = false;
} else {
  console.log("Non ho capito se hai scelto pari o dispari");
}

var numUtente = parseInt(prompt("Inserisci un numero tra 1 e 5:"));

// genero un numero randomico per cpu

var numCPU = numeroCasualeTra(1, 5);

// faccio la somma

var somma = numCPU + numUtente;

console.log(numUtente + " + " + numCPU + " = " + somma);
// calcolo se è pari o Dispari. La variabile risultato è true se la somma è pari ed è false se la somma è dispari. proprio come scommessa

var risultato= isEven(somma);

// verifico il risultato con la scommessa inizia e stampo chi ha vinto. Se l'utente inserisce una parola diversa da pari o dispari nella scommessa in questo if si va sempre nell'else e quindi l'utente perde sempre

if (risultato == scommessa){
  console.log("Hai Vinto!");
}else {
  console.log("Hai Perso!");
}


// FUNCTIONS

// funzione per verificare se un numero è pari. restituisce true in caso di numero Pari

function isEven(num) {
  if (num % 2 == 0){ // se il modulo di 2 (cioè il resto di num / 2 cioè "ci sta n volte col resto di: modulo") è 0 allora il numero è pari e la funzione restituisce true altrimenti restituisce false
    return true;
  }else{
    return false;
  }
}


// Funzione per generare un numero random tra max e min. Max e min sono inclusi nei possibili risultati.  MIN E MAX NON VANNO INVERTITI. SI SCRIVE COME ARGOMENTO PRIMA MIN E POI MAX!!!

function numeroCasualeTra(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
