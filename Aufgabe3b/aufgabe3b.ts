//
//Aufgabe: Aufgabe 3b
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 09.04.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

document.addEventListener('DOMContentLoaded', function() {

    var cards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik As"];
    var handCards: string[] = []; //leeres Array für die Handkarten
    var discardPile: string[] = []; //leeres Array für den Ablagestapel

    document.getElementById("drawpile").addEventListener("click", moveToHand);
    function moveToHand() {
        if (handCards.length < 5 && cards.length > 0) {
            var value = (Math.random() * cards.length) + 0;
            var randomCard = cards[value];
            cards.splice(value, 1);
            handCards.push(cards[value]);

          
            
        }

    }

    document.getElementById("discardpile").addEventListener("click", moveToDiscardPile);
    function moveToDiscardPile() {
        for (var i = 0; i < handCards.length; i++) {
            handCards.splice(i, 1);
            discardPile.push(handCards[i]);
            break;
        }

    }
});