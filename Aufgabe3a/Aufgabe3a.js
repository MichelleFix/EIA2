//
//Aufgabe: Aufgabe 3
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 29.03.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
// ### Frage: warum wird es beim anklicken nicht gelb?
document.addEventListener('DOMContentLoaded', function () {
    //Variablen deklarieren
    var n = 64;
    var lines = 0;
    var rice = 1;
    for (var i = 0; i < n; i++) {
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
    // Aufgabe3a
    for (var k = 0; k < 8; k++) {
        var firstRow = document.getElementsByTagName("div");
        firstRow[k].addEventListener("click", function () {
            this.classList.toggle("marked");
            totalRice();
        });
    }
    function totalRice() {
        var markedDiv = document.getElementsByClassName("marked");
        var total = 0;
        if (markedDiv.length == 0) {
            document.getElementById("display").style.display = "none";
        }
        else {
            document.getElementById("display").style.display = "inline";
            for (var l = 0; l < markedDiv.length; l++) {
                total += Number(markedDiv[l].textContent);
                document.getElementById("display").innerText = "Dezimal: " + total + "\r" + "Hexadezimal: " + total.toString(16);
            }
        }
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("display").style.left = (Event.clientX + 10) + "px";
        document.getElementById("display").style.top = (Event.clientY + 10) + "px";
    });
});
//Anordnung durch CSS-Befehl in der ts-Datei. 
//Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite) 
//# sourceMappingURL=Aufgabe3a.js.map