// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const intNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = document.getElementById("result");
let sum = 0;

for (let i = 0; i < intNumbers.length; i++) {
  const intNumber = intNumbers[i];
  if (intNumber % 2 !== 0) {
    sum += intNumber;
    console.log(sum);
    result.innerHTML = "La somma è " + sum;
  }
}
