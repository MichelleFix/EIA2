var crazyCircles;
(function (crazyCircles) {
    //Variablen f�r die schwarzen Kreise
    let x;
    let y;
    let circles = [];
    let b = 10;
    let speed = 3;
    let c;
    let imgData; // Bildschirm wird aktualisiert
    //HTML Elemente
    let start;
    let intro;
    window.addEventListener("load", init);
    function init(_event) {
        crazyCircles.canvas = document.getElementsByTagName("canvas")[0];
        crazyCircles.crc2 = crazyCircles.canvas.getContext("2d");
        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        //Bei Klick auf Start beginnt das Spiel
        start.addEventListener("click", startGame);
        for (let i = 0; i < b; i++) {
            c = new crazyCircles.Circles(250, 250); // ein neuer Kreis wird erstellt
            circles[i] = c;
            console.log("create new circle");
            c.setRandomPosition();
        }
        imgData = crazyCircles.crc2.getImageData(0, 0, crazyCircles.canvas.width, crazyCircles.canvas.height); // canvas speichern
    } // INIT ENDE
    function startGame() {
        intro.style.display = "none";
        window.setTimeout(animate, 10);
    }
    function animate() {
        crazyCircles.crc2.putImageData(imgData, 0, 0);
        c.update();
        console.log("animate");
        window.setTimeout(animate, 10);
    }
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=main.js.map