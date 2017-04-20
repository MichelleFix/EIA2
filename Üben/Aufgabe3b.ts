//  document.getElementById("drawpile").addEventListener("click", moveToHand);
//    function moveToHand(): void {
//        if (handCards.length < 5) {
//            let min: number = 0;
//            let max: number = cards.length - 1;
//            var value: number = Math.round(Math.random() * (max - min) + min);
//
//            handCards.push(cards.splice(value, 1)[0]);               //füg diesen WErt ein der in der klammer steht. array cards, nimm EINE random karte und lege sie in daas array handCards
//
//        }
//
//
//
//    }
//
//    function showCards(): void {
//        if (cards.length == 0) {
//            let cardsDiv: HTMLElement = document.getElementById("drawpile");
//            cardsDiv.parentNode.removeChild(cardsDiv)
//        }
//
//        let handDiv: HTMLElement = document.getElementById("handcard");
//        for (let i: number = 0; i < handCards.length; i++) {
//            let div: HTMLElement = document.e                        // ?????? Karten müssen angezigt werden
//
//        }
//
//    }
//
//
//    document.getElementById("discardpile").addEventListener("click", moveToDiscardPile);
//    function moveToDiscardPile() {
//        for (var i = 0; i < handCards.length; i++) {
//            handCards.splice(i, 1);
//            discardPile.push(handCards[i]);
//            break;
//        }
//
//        if (discardPile.length > 0) {
//            document.getElementById("discardPile").textContent = discardPile [discardPile.length - 1];
//        }
//
//    }