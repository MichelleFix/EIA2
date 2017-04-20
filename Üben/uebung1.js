document.addEventListener('DOMContentLoaded', function () {
    //Variablen deklarieren
    var n = 64;
    var lines = 1;
    for (var i = 0; i < 64; i++) {
        var div = document.createElement("div"); //Div Tag werden erstellt und in den Body geschrieben. Bei jeder wiederholung der Schleife 1Div
        document.body.appendChild(div);
        if (lines % 2 == 0) {
            if (i % 2 == 0) {
                div.className = "black";
            }
            else {
                div.className = "white";
            }
        }
    }
});
//# sourceMappingURL=uebung1.js.map