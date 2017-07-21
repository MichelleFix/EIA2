var crazyCircles;
(function (crazyCircles) {
    // Variable f�r beide Kreise
    let circles = [];
    //Variablen f�r die schwarzen Kreise
    let x;
    let y;
    let blackCircle = [];
    let bc;
    let b = 20;
    //Variablen f�r den roten Kreis
    let redCircle = [];
    let clickedCircle = [];
    let rc;
    let r = 1;
    let level = 0;
    let imgData; // Bildschirm wird aktualisiert
    let miss = 0;
    //HTML Elemente
    let start;
    let intro;
    let displaylevel = document.getElementById("level");
    let displayMiss;
    let resetButton;
    window.addEventListener("load", init);
    function init(_event) {
        crazyCircles.canvas = document.getElementsByTagName("canvas")[0];
        crazyCircles.crc2 = crazyCircles.canvas.getContext("2d");
        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        displayMiss = document.getElementById("misses");
        resetButton = document.getElementById("resetButton");
        //Klick-Events
        start.addEventListener("click", startGame); // Startet das Game
        start.addEventListener("touchstart", startGame);
        crazyCircles.canvas.addEventListener("click", clickCanvas); // F�ngt die roten Kreise
        crazyCircles.canvas.addEventListener("touchstart", clickCanvas);
        resetButton.addEventListener("click", resetGame); // L�dt das Spiel neu
        resetButton.addEventListener("touchstart", resetGame);
        imgData = crazyCircles.crc2.getImageData(0, 0, crazyCircles.canvas.width, crazyCircles.canvas.height); // canvas speichern
    } // INIT ENDE
    // Spiel wird gestartet
    function startGame(_event) {
        intro.style.display = "none";
        drawRedCircle();
        drawBlackCircles();
        window.setTimeout(animate, 20);
        //        start.disabled =  true;
    }
    function animate() {
        crazyCircles.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < b; i++) {
            let c = circles[i];
            c.update();
        }
        rc.update();
        window.setTimeout(animate, 20);
    }
    function drawRedCircle() {
        // Roter Kreis wird gezeichnet
        for (let i = 0; i < r; i++) {
            rc = new crazyCircles.RedCircle();
            redCircle[i] = rc;
            console.log("create new red circle");
            rc.setRandomPosition();
        }
    }
    function drawBlackCircles() {
        for (let i = 0; i < b; i++) {
            bc = new crazyCircles.BlackCircles();
            circles[i] = bc;
            console.log("create new circle");
            bc.setRandomPosition();
        }
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
        level++;
        // und ins HTML geschrieben
        document.getElementById("level").innerHTML = "Runde:" + level;
        // angeklickte rote Kreise werden in ein Array geschoben
        clickedCircle.push(("redcircle" + level));
        console.log(clickedCircle);
        // Kreis bewegt sich schneller
        rc.vx *= 1.5;
        if (clickedCircle.length == 5) {
            let newRedCircle = new crazyCircles.RedCircle();
            console.log("create new  red circle");
            redCircle.push(newRedCircle);
            r++;
        }
    }
    function failedClick() {
        console.log("failedClick");
        miss += 1;
        console.log(miss);
        displayMiss.innerHTML = "Daneben:" + miss;
        if (miss == 5) {
            console.log("gameover");
            document.getElementById("gameOver").style.display = "inline";
        }
        //        for (let i: number = 0; i > 5; i++) {
        //            displayMiss.innerHTML = "Daneben:" + i;
        //
        //            if (i == 5) {
        //                document.getElementById("gameOver").style.display = "inline";
        //            }
        //        }
    }
    function resetGame(_event) {
        document.location.reload();
    }
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=main.js.map