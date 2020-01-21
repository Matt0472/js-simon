// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Consigli del giorno:
// Partite sempre dalla logica e poi passate a scrivere in js.
// Usate le slide per vedere la sintassi delle nuove cose studiate :)
// Pushate ogni piccolo passo in avanti!
// Qualunque sperimentazione è benvenuta, ma come sempre mettetela in una cartella bonus lasciando l'esercizio base funzionante come index principale
var numberList = [];
var randomNumber = getRandomNumber(1, 100);
while (numberList < 5) {
  if (numberList.includes(randomNumber) == false) {
    numberList.push(randomNumber);

  }
}
var cpuNumber = alert(randomNumber);





function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
