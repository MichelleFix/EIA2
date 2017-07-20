namespace crazyCircles {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //Variablen f�r die schwarzen Kreise
    let x: number;
    let y: number;
    let circles: Circles[] = [];
    let b: number = 20;
    //    let c: Circles;

    let imgData: ImageData;     // Bildschirm wird aktualisiert

    //Variablen f�r den roten Kreis
    let redCircle: RedCircle[] = [];
    let clickedCircle: string[] = [];
    let rc: RedCircle;
    let r: number = 1;
    let level: number = 0;

    //HTML Elemente
    let start: HTMLElement;
    let intro: HTMLElement;
    let displaylevel: HTMLElement = document.getElementById("level");
    let displayMiss: HTMLElement;
    let resetButton: HTMLElement;


    window.addEventListener("load", init);


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        displayMiss = document.getElementById("misses");
        resetButton = document.getElementById("resetButton");

        //Klick-Events
        start.addEventListener("click", startGame);     // Startet das Game
        start.addEventListener("touchstart", startGame);
        canvas.addEventListener("click", clickCanvas);      // F�ngt die roten Kreise
        canvas.addEventListener("touchstart", clickCanvas);
        resetButton.addEventListener("click", resetGame);   // L�dt das Spiel neu
        resetButton.addEventListener("touchstart", resetGame);

        // Erstellt 10 schwarze Kreise
        for (let i: number = 0; i < b; i++) {
            let c: Circles = new Circles();
            circles[i] = c;
            console.log("create new circle");
            c.setRandomPosition();
        }

        // Erstellt ein roter Kreis
        drawRedCircle();

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern

    } // INIT ENDE

    // Spiel wird gestartet
    function startGame(_event: Event): void {
        intro.style.display = "none";
        window.setTimeout(animate, 20);
        //        start.disabled =  true;
    }


    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < b; i++) {
            let c: Circles = circles[i];
            c.update();

        }
        rc.update();
        console.log("animate");
        window.setTimeout(animate, 20);

    }

    function drawRedCircle(): void {
        // Roter Kreis wird gezeichnet
        for (let i: number = 0; i < r; i++) {
            rc = new RedCircle();
            redCircle[i] = rc;
            console.log("create new red circle");
            rc.setRandomPosition();

        }
    }

    function clickCanvas(_event: MouseEvent): void {
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

    function clickRedCircle(): void {
        //Runden werden hochgez�hlt...
        level++;
        // und ins HTML geschrieben
        document.getElementById("level").innerHTML = "Runde:" + level;

        // angeklickte rote Kreise werden in ein Array geschoben
        clickedCircle.push(("redcircle" + level));
        console.log(clickedCircle);

        // Kreis bewegt sich schneller
        rc.vx += 3;


        if (clickedCircle.length == 5) {        //wenn 5 Kreise im Array sind, wird ein weiterer Kreis hinzugef�gt
            let newRedCircle: RedCircle = new RedCircle();
            redCircle.push(newRedCircle);
        }

    }

    function failedClick(): void {
        console.log("failedClick");
        let miss: number = 0;
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

    function resetGame(_event: Event): void {
        document.location.reload();
    }

}