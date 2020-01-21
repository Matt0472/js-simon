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
$(document).ready(function() {
    var numberList = [];
    while (numberList.length < 5) {
      var randomNumber = getRandomNumber(1, 100);
      if (numberList.includes(randomNumber) == false) {
        numberList.push(randomNumber);
      }
    }
    alert(numberList);

    setTimeout(getNewPrompt, 2000);

    var userNumber = [];
    var message = 'Hai vinto';
    function getNewPrompt() {
      for (var i = 0; i < 5; i++) {
        number = parseInt(prompt('Inserisci un numero da 1 a 100'));
        userNumber.push(number);
        console.log(userNumber);
      }
      if(isInArray(numberList, number) == true){
        message = 'Hai Vinto';
        alert(message);
      } else {
        message = 'Hai perso';
        alert(message);
      }
    }

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function isInArray(array, element) {
      var i = 0;
      var result = false;
      while (i < array.length && result == false) {
        if (array[i] == element) {
          result = true;
        }
        i++;
      }
      return result;
    }
  }
);
