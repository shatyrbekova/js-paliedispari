// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione 
// per capire se la parola inserita è palindroma


var askPrompt = prompt('Which is a string?');
var outputElement=document.getElementById('start');

var wordReverse = checkPalindrome(askPrompt);

function checkPalindrome (stringa){
    var str = stringa.split('').reverse().join('');
    return str;
}
if(askPrompt == wordReverse){
    outputElement.innerHTML += 'The string  which has been typed  by You is PALINDROME';
}
else {
    outputElement.innerHTML += 'The string which has been typed by You is NOT PALINDROME';
}
  
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Infine, dichiariamo chi ha vinto.





function getRandomNum (numRandom){
     var askNumPc = Math.floor(Math.random()*(max-min+1))-min;
     return result;
}
outputElement.innerHTML+='Il numero di Pc è' + ' '+result;

function isPari (num) {
    if (num% 2===0){
        return true;
    }else {
        return false;
    }
}

var askPariOrDispari = prompt('Pari o dispari').toLowerCase();
// e se l'utente inserisce un'altra parola? tipo pippo? che succede? PROBLEMA


while ( askPariOrDispari !== 'pari'&& askPariOrDispari !== 'dispari'){
    alert('Attenzione! devi inserire o pari o dispari');
    var askPariOrDispari = prompt('Pari o dispari').toLowerCase();
}
 var  askNumUser = parseInt(prompt('Inserire un numero da 1 a 5'));

 while ( isNaN(askNumUser)|| askNumber < 1 || askNumber > 5) {
     alert ('Attenzione! Devi inserire un numero da 1 a 5 ')
     askNumUser = parseInt(prompt('Inserire un numero da 1 a 5'));
 }

var numberComputer = getRandomNum(1,5);
var total = askNumber + numberComputer;
console.log ('Il totale è:', total);

// verifichiamo che la somma sia pari o dispari,  => questa è una funzione
// confrontandoci con quanto scelto dall'utente => questo lo facciamo "esternamente"


// quando vincerà l'utente?
// se il numero è pari e l'utente ha scelto pari ha vinto
// se il numero è dispari e l'utente ha scelto dispari ha vinto
// altrimenti ha perso.

// scriviamolo meglio.
// se la funzione ritorna true e l'utente ha scelto pari ha vinto
// se la funzione ritorna false e l'utente ha scelto dispari ha vinto
// altrimenti ha perso => vince il computer.

// scriviamolo in codice:

if ((isPari(total) === true && askPariOrDispari === 'pari')
    || (isPari(total) === false && askPariOrDispari === 'dispari')) {
   outputElement.innerHTML += "Hai vinto";
} else {
   outputElement.innerHTML += "Hai perso / Ha vinto il computer";
}




    



   


