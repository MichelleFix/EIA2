namespace crazyCircles {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //Variablen für die schwarzen Kreise
    let x: number;
    let y: number;
    let circles: Circles[] = [];
    let b: number = 10;
    let c: Circles;

    let imgData: ImageData;     // Bildschirm wird aktualisiert

    //Variablen für den roten Kreis
    let redCircle: RedCircle[] = [];
    export let clickedCircle: string[] = [];
    let rc: RedCircle;
    let r: number = 1;
    export let round: number = 0;

    //HTML Elemente
    let start: HTMLElement;
    let intro: HTMLElement;
    let displayRound: HTMLElement = document.getElementById("round");
    let displayMiss: HTMLElement;


    window.addEventListener("load", init);


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");
        displayMiss = document.getElementById("misses");

        //Bei Klick auf Start beginnt das Spiel
        start.addEventListener("click", startGame);

        canvas.addEventListener("click", clickCanvas);

        for (let i: number = 0; i < b; i++) {
            c = new Circles();   // ein neuer Kreis wird erstellt
            circles[i] = c;
            console.log("create new circle");
            c.setRandomPosition();
        }


        for (let i: number = 0; i < r; i++) {
            rc = new RedCircle();
            redCircle[i] = rc;
            console.log("create new red circle");
            rc.setRandomPosition();

        }


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern


    } // INIT ENDE

    function startGame(): void {
        intro.style.display = "none";
        window.setTimeout(animate, 10);
    }


    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        rc.update();
        c.update();
        console.log("animate");
        window.setTimeout(animate, 10);

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
        //Runden werden hochgezählt...
        round++;
        // und in HTML geschrieben
        displayRound.innerHTML = "Runde" + round;

        // angeklickte rote Kreise werden in ein Array geschoben
        clickedCircle.push(("redcircle" + round));
        console.log(clickedCircle);

        if (clickedCircle.length == 5) {        //wenn 5 Kreise im Array sind, wird ein weiterer Kreis hinzugefügt
            rc.update();
        }

    }

    function failedClick(): void {
        let miss: number = 0;
        miss++;
        displayMiss.innerHTML = "Daneben:" + round;
        if (miss == 4) {
            document.getElementById("gameOver").style.display = "inline";
        }

    }


}