
//
//Aufgabe: Aufgabe 3
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 29.03.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

// ### Frage: warum wird es beim anklicken nicht gelb?


document.addEventListener('DOMContentLoaded', function() {

    //Variablen deklarieren

    let n: number = 64;
    let lines: number = 0;
    let rice: number = 1;

    for (var i = 0; i < n; i++) {           //Bei jeder Wiederholung der Schleife wird ein Div hinzugef�gt
        let div = document.createElement("div");  //Div Tag werden erstellt und in den Body geschrieben. 
        document.body.appendChild(div);

        if (i % 8 == 0) {                  //Nach 8 Divs soll in die n�chste Zeile gewechselt werden.
            div.className = "divFloat";
            lines++;                      // die neue Zeile wird erstellt
        }

        if (lines % 2 == 0) {               //wenn eine gerade Zeilen (0,2,4,6) gelesen wird....
            if (i % 2 == 0) {               // werden die geraden Felder schwarz ...
                div.style.backgroundColor = "black";
            }
            else {                          // und die ungeraden Felder wei�
                div.style.backgroundColor = "white";
            }
        }


        if (lines % 2 != 0) {               //wenn eine ungerade Zeilen (1,3,5,7) gelesen wird....
            if (i % 2 == 0) {               // werden die geraden Felder wei� ...
                div.style.backgroundColor = "white";
            }
            else {                          // und die ungeraden Felder schwarz
                div.style.backgroundColor = "black";
            }
        }

        div.innerText = "" + rice;          // vorherige Anzahl der Reisk�rner immer mal 2
        rice *= 2;
    }

    // Aufgabe3a

    for (var k = 0; k < 8; k++) {
        var firstRow = document.getElementsByTagName("div");
        firstRow[k].addEventListener("click", function(): void {

            this.classList.toggle("marked");
            totalRice();
        });
    }
    function totalRice(): void {
        var markedDiv = document.getElementsByClassName("marked");
        var total = 0;
        if (markedDiv.length == 0) {
            document.getElementById("display").style.display = "none";
        }
        else {
            document.getElementById("display").style.display = "inline";

            for (let l = 0; l < markedDiv.length; l++) {
                total += Number(markedDiv[l].textContent);
                document.getElementById("display").innerText = "Dezimal: " + total + "\r" + "Hexadezimal: " + total.toString(16);
            }
        }

    }

    document.addEventListener("mousemove", function(Event) {
        document.getElementById("display").style.left = (Event.clientX + 10) + "px";
        document.getElementById("display").style.top = (Event.clientY + 10) + "px";
    });
});

//Anordnung durch CSS-Befehl in der ts-Datei. 
//Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite)