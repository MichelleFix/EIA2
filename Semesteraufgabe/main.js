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
    let level = 0;
    //HTML Elemente
    let start;
    let intro;
    let displaylevel = document.getElementById("level");
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
        drawRedCircle();
        imgData = crazyCircles.crc2.getImageData(0, 0, crazyCircles.canvas.width, crazyCircles.canvas.height); // canvas speichern
    } // INIT ENDE
    function startGame(_event) {
        intro.style.display = "none";
        window.setTimeout(animate, 20);
        //        start.disabled =  true;
    }
    function animate() {
        crazyCircles.crc2.putImageData(imgData, 0, 0);
        rc.update();
        c.update();
        console.log("animate");
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
        crazyCircles.clickedCircle.push(("redcircle" + level));
        console.log(crazyCircles.clickedCircle);
        // Kreis bewegt sich schneller
        rc.vx += 2;
        if (crazyCircles.clickedCircle.length == 5) {
            let newRedCircle = new crazyCircles.RedCircle();
            redCircle.push(newRedCircle);
        }
    }
    function failedClick() {
        console.log("failedClick");
        let miss = 0;
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
})(crazyCircles || (crazyCircles = {}));
//# sourceMappingURL=main.js.map