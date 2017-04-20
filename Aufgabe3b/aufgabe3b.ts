//
//Aufgabe: Aufgabe 3b
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 09.04.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

//Frage: wie kann ich die erstellten divs ansprechen??? Zeile 51
//         wie kann es dir variable 'div' auch weiter unten noch erkennen? zeile 61

document.addEventListener('DOMContentLoaded', function() {

    var cards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo K�nig", "Karo As", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz K�nig", "Kreuz As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz K�nig", "Herz As", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik K�nig", "Pik As"];
    var handCards: string[] = []; //leeres Array f�r die Handkarten
    var discard: string[] = []; //leeres Array f�r den Ablagestapel

    // 1. Bei jedem Klick auf den nachziehstapel muss eine random karte auf die hand wandern. Die Random karte muss aus dem Nachziehstapel gel�scht werden

    document.getElementById("drawpile").addEventListener("click", moveToHand);
    console.log("click draw");
    function moveToHand(): void {
        if (handCards.length < 5) {         //Es d�rfen nur max.  karten auf die hand
            let min: number = 0;
            let max: number = cards.length - 1;
            var value: number = Math.round(Math.random() * (max - min) + min);

            let pulledCard: string = cards[value];      //die gezogene Karte 
            cards.splice(value, 1);                     // EIN Element, das an der Stelle "value" kommt, wird aus dem array entfernt
            handCards.push((pulledCard)[0]);            // Das entfernte element wird in das array handcards an der stelle 0 eingef�gt. also ganz noch vorne
            document.getElementById("drawpile").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + cards.length;
            // KURZSCHREIBWEISE:           handCards.push(cards.splice(value, 1)[0]);

            //danach soll ein Div f�r die neue Karte ertsellt werden.
            var div: HTMLDivElement = document.createElement("div");
            document.getElementById("handcard").appendChild(div);
            div.textContent = pulledCard;           //darauf soll geschrieben werden, um welche karte es sich handelt

            //Die neu erstellten Divs
            let s: CSSStyleDeclaration = div.style;
            s.cssFloat = "left"
            s.display = "inline";
            s.textAlign = "center";
            s.backgroundColor = "red";
            s.margin = "8em";
            s.width = "100px";
            s.height = "200px";
        }
    }

    //Von der Hand auf den Ablagestapel

    document.getElementById("handcard").addEventListener("click", moveToDiscard);
    function moveToDiscard() {
        for (var i = 0; i < handCards.length; i++) {
            handCards.splice(i, 1);
            discard.push(handCards[i]);
            break;
        }

        //        document.getElementById("discard").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + cards.length;
        //        div.parentNode.removeChild(div);
    }


});
