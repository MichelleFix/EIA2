document.addEventListener('DOMContentLoaded', function() {

    for (let i = 0; i < 64; i++) {                                 //damit was durchgez�hlt wird mit einer Bedingung und einem Z�hler 
        let element: HTMLElement = document.createElement("div");       //ein HTML element (div) wird in elemt erstellt

        if (i % 2 == 0) {                       //gerade oder ungerader Durchgang; Modulo um einen wechsel zu haben. Andere M�glichkeiten: true/false, 0/1;
            element.className = "white";        //gerade Zahlen

        } else {
            element.className = "black";       // unegrade Zahlen
        }
    }


});

//Anordnung durch CSS-Befehl in der ts-Datei. Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite)