// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
const numberInsert = parseInt(prompt("Inserisci qui il tuo numero"));
const result = document.getElementById("result");

if (numberInsert % 2 == 0) {
  result.innerHTML = numberInsert;
  console.log(numberInsert);
} else if (numberInsert % 2 !== 0) {
  result.innerHTML = numberInsert + 1;
}
