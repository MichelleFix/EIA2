document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < 64; i++) {
        var element = document.createElement("div"); //ein HTML element (div) wird in elemt erstellt
        if (i % 2 == 0) {
            element.className = "white"; //gerade Zahlen
        }
        else {
            element.className = "black"; // unegrade Zahlen
        }
    }
});
//Anordnung durch CSS-Befehl in der ts-Datei. Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite) 
//# sourceMappingURL=Aufgabe2.js.map