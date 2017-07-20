var crazyCircles;
(function (crazyCircles) {
    //Variablen f�r die schwarzen Kreise
    let x;
    let y;
    let circles = [];
    let b = 10;
    let c;
    let imgData; // Bildschirm wird aktualisiert
    //Variablen f�r den roten Kreis
    let redCircle = [];
    crazyCircles.clickedCircle = [];
    let rc;
    let r = 1;
    crazyCircles.round = 0;
    //HTML Elemente
    let start;
    let intro;
    let displayRound = document.getElementById("round");
    let displayMiss;
    window.addEventListener("load", init);
    function init(_event) {
        crazyCircles.canvas = document.getElementsByTagName("canvas")[0];
        crazyCircles.crc2 = crazyCircles.canvas.getContext("2d");
        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        displayMiss = document.getElementById("misses");
        //Bei Klick auf Start beginnt das Spiel
        start.addEventListener("click", startGame);
        crazyCircles.canvas.addEventListener("click", clickCanvas);
        for (let i = 0; i < b; i++) {
            c = new crazyCircles.Circles(); // ein neuer Kreis wird erstellt
            circles[i] = c;
            console.log("create new circle");
            c.setRandomPosition();
        }
        for (let i = 0; i < r; i++) {
            rc = new crazyCircles.RedCircle();
            redCircle[i] = rc;
            console.log("create new red circle");
            rc.setRandomPosition();
        }
        imgData = crazyCircles.crc2.getImageData(0, 0, crazyCircles.canvas.width, crazyCircles.canvas.height); // canvas speichern
    } // INIT ENDE
    function startGame() {
        intro.style.display = "none";
        window.setTimeout(animate, 10);
    }
    function animate() {
        crazyCircles.crc2.putImageData(imgData, 0, 0);
        rc.update();
        c.update();
        console.log("animate");
        window.setTimeout(animate, 10);
    }
    function clickCanvas(_event) {
        let mX = _event.clientX;
        let mY = _event.clientY;
        let diffX = rc.x - _event.clientX;
        let diffY = rc.y - _event.clientY;
        if (Math.abs(diffX) < rc.radius && Math.abs(diffY) < rc.radius) {
            console.log("getroffen");
            clickRedCircle();
        }
        else {
            console.log("daneben");
            failedClick();
        }
    }
    function clickRedCircle() {
        //Runden werden hochgez�hlt...
        crazyCircles.round++;
        // und in HTML geschrieben
        displayRound.innerHTML = "Runde" + crazyCircles.round;
        // angeklickte rote Kreise werden in ein Array geschoben
        crazyCircles.clickedCircle.push(("redcircle" + crazyCircles.round));
        console.log(crazyCircles.clickedCircle);
        if (crazyCircles.clickedCircle.length == 5) {
            rc.update();
        }
    }
    function failedClick() {
        let miss = 0;
        miss++;
        displayMiss.innerHTML = "Daneben:" + crazyCircles.round;
        if (miss == 4) {
            document.getElementById("gameOver").style.display = "inline";
        }
    }
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=main.js.map