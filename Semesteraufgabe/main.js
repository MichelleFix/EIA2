var crazyCircles;
(function (crazyCircles) {
    //Variablen f�r die schwarzen Kreise
    let x;
    let y;
    let circles = [];
    let b = 10;
    let speed = 3;
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
        start.addEventListener("click", startGame);
        for (let i = 0; i < b; i++) {
            let c = new crazyCircles.Circles(); // ein neuer Kreis wird erstellt
            circles[i] = c;
            c.setRandomPosition();
        }
        imgData = crazyCircles.crc2.getImageData(0, 0, crazyCircles.canvas.width, crazyCircles.canvas.height); // canvas speichern
    } // INIT ENDE
    function startGame() {
        intro.style.display = "none";
        animateCircles();
        console.log("animate");
        window.setTimeout(animateCircles, 200);
    }
    function animateCircles() {
        crazyCircles.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < b; i++) {
            let c = circles[i];
            //            if (c.x > canvas.width + 30) {
            //                c.x = 0 - 30;
            //            }
            //                if (c.y > canvas.height + 30) {
            //
            //                    c.y = 0 - 30;
            //                }
            //
            //                if (c.y < 0 - 30) {
            //                    c.y = canvas.height - 30;
            //                }
            if ((c.x + speed + c.radius > 0 + crazyCircles.canvas.width) || (c.x - c.radius + speed < 0)) {
                speed = -speed;
            }
            if ((c.y + speed + c.radius > 0 + crazyCircles.canvas.height) || (c.y - c.radius + speed < 0)) {
                speed = -speed;
            }
            c.update();
        }
        window.setTimeout(animateCircles, 10);
    }
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=main.js.map