// Funzione che verifica se una parola è palindroma

// creo un ciclo for con un numero di cicli uguale alla lunghezza della parola in modo da verificare tutte le lettere. confronto ogni lettera con quella in posizione speculare. (prima con ultima, seconda con penultima...) se tutte sono uguali allora la parola è palindroma altrimenti no.

var parola = prompt("Inserisci una parola e ti dirò se è palindroma:");

// creo una variabile d'appoggio
var palindroma = true;
for (var i = 0; i < parola.length; i++) {
  if (parola[i] != parola[parola.length - 1 - i]) {
    palindroma = false;
  }
 console.log(parola[i], parola[parola.length -1 - i]);
}

console.log(palindroma);
