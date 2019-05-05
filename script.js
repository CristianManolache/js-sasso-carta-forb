// descrizione: Sasso Carta e Forbice tra due giocatori CPU
// Genero due numeri random
var giocatore1 = scelta ();
var giocatore2 = scelta ();

// Trasformo risultato numerico in sasso carta forbici creando una funzione
function scelta () {

 var risultato = Math.floor(Math.random()* 3) +1;
 switch (risultato) {
   case 1:
     risultato = 'sasso';
     break;
   case 2:
     risultato = 'carta';
     break;
   default:
     risultato = 'forbici';
 }
 return risultato
}

console.log(giocatore1, giocatore2);
// salvo il risultato della trasformazione in due variabili

// var scelta1 = scelta (giocatore1);
// var scelta2 = scelta (giocatore2);
// console.log(scelta1, scelta2);

// Verifico chi vince

if ((giocatore1 === 'sasso' && giocatore2 === 'forbici') || (giocatore1 === 'carta' && giocatore2 === 'sasso') || (giocatore1 === 'forbici' && giocatore2 === 'carta')){
 console.log('ha vinto giocatore1');
} else if (giocatore1 === giocatore2){
 console.log('riprova');
} else {
 console.log('ha vinto giocatore2');
}
