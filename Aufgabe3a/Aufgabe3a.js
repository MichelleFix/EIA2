//
//Aufgabe: Aufgabe 3
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 29.03.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    //Variablen deklarieren
    var n = 64;
    var lines = 0;
    var rice = 1;
    for (var i = 0; i < 64; i++) {
        var div = document.createElement("div"); //Div Tag werden erstellt und in den Body geschrieben. 
        document.body.appendChild(div);
        if (i % 8 == 0) {
            div.className = "divFloat";
            lines++; // die neue Zeile wird erstellt
        }
        if (lines % 2 == 0) {
            if (i % 2 == 0) {
                div.style.backgroundColor = "black";
            }
            else {
                div.style.backgroundColor = "white";
            }
        }
        if (lines % 2 != 0) {
            if (i % 2 == 0) {
                div.style.backgroundColor = "white";
            }
            else {
                div.style.backgroundColor = "black";
            }
        }
        div.innerText = "" + rice; // vorherige Anzahl der Reisk�rner immer mal 2
        rice *= 2;
    }
});
//Anordnung durch CSS-Befehl in der ts-Datei. 
//Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite) 
//# sourceMappingURL=Aufgabe3a.js.map