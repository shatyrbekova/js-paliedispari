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


//var askPariOrDispari = prompt('Pari o dispari');
// var  askNumUser = parseInt(prompt('Inserire un numero da 1 a 5'));
// var max = 5;
// var  min =1;
// function getRandomNum (numRandom){
//      var askNumPc = Math.floor(Math.random()*max).
//      return result;
// }
// outputElement.innerHTML+='Il numero di Pc è' + ' '+result;






    



   


