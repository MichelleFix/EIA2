var crazyCircles;
(function (crazyCircles) {
    //Variablen f�r die schwarzen Kreise
    let x;
    let y;
    let circles = [];
    let b = 10;
    let imgData; // Bildschirm wird aktualisiert
    window.addEventListener("load", init);
    function init(_event) {
        crazyCircles.canvas = document.getElementsByTagName("canvas")[0];
        crazyCircles.crc2 = crazyCircles.canvas.getContext("2d");
        for (let i = 0; i < b; i++) {
            let c = new crazyCircles.Circles(); // ein neuer Kreis wird erstellt
            c.setRandomPosition();
        }
        imgData = crazyCircles.crc2.getImageData(0, 0, crazyCircles.canvas.width, crazyCircles.canvas.height); // canvas speichern
        animateCircles();
        window.setTimeout(animateCircles, 200);
    } // INIT ENDE
    function animateCircles() {
        crazyCircles.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < b; i++) {
            let k = circles[i];
            if (k.x < 0 - 10) {
                k.x = crazyCircles.canvas.width + 10;
            }
            if (k.y > crazyCircles.canvas.height) {
                k.y = 0;
            }
            if (k.y < 0) {
                k.y = crazyCircles.canvas.height;
            }
            k.update();
        }
        window.setTimeout(animateCircles, 20);
    }
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=main.js.map