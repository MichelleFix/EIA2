//
//Aufgabe: Aufgabe 3b
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 09.04.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var cards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik As"];
    var handCards = []; //leeres Array f�r die Handkarten
    var discard = []; //leeres Array f�r den Ablagestapel
    // 1. Bei jedem Klick auf den nachziehstapel muss eine random karte auf die hand wandern. Die Random karte muss aus dem Nachziehstapel gel�scht werden
    document.getElementById("drawpile").addEventListener("click", moveToHand);
    console.log("click draw");
    function moveToHand() {
        if (handCards.length < 5) {
            var min = 0;
            var max = cards.length - 1;
            var value = Math.round(Math.random() * (max - min) + min);
            var pulledCard = cards[value]; //die gezogene Karte 
            cards.splice(value, 1); // EIN Element, das an der Stelle "value" kommt, wird aus dem array entfernt
            handCards.push((pulledCard)[0]); // Das entfernte element wird in das array handcards an der stelle 0 eingef�gt. also ganz noch vorne
            document.getElementById("drawpile").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + cards.length;
            // KURZSCHREIBWEISE:           handCards.push(cards.splice(value, 1)[0]);
            //danach soll ein Div f�r die neue Karte ertsellt werden.
            var div = document.createElement("div");
            document.getElementById("handcard").appendChild(div);
            div.textContent = pulledCard; //darauf soll geschrieben werden, um welche karte es sich handelt
            //Die neu erstellten Divs
            var s = div.style;
            s.cssFloat = "left";
            s.display = "inline";
            s.textAlign = "center";
            s.backgroundColor = "red";
            s.margin = "8em";
            s.width = "100px";
            s.height = "200px";
        }
    }
    //Von der Hand auf den Ablagestapel
    document.getElementById("handcard").addEventListener("click", moveToDiscard); //wie kann ich die erstellten divs ansprechen???
    function moveToDiscard() {
        for (var i = 0; i < handCards.length; i++) {
            handCards.splice(i, 1);
            discard.push(handCards[i]);
            break;
        }
        if (discard.length > 0) {
            document.getElementById("discard").textContent = discard[discard.length - 1];
        }
    }
});
//# sourceMappingURL=aufgabe3b.js.map