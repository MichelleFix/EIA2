namespace crazyCircles {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //Variablen für die schwarzen Kreise
    let x: number;
    let y: number;
    let circles: Circles[] = [];
    let b: number = 10;
    let speed: number = 3;
    let c: Circles;

    let imgData: ImageData;     // Bildschirm wird aktualisiert

    //HTML Elemente
    let start: HTMLElement;
    let intro: HTMLElement;

    window.addEventListener("load", init);


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //HTML Elemente
        start = document.getElementById("startButton");
        intro = document.getElementById("introducing");

        //Bei Klick auf Start beginnt das Spiel
        start.addEventListener("click", startGame);

        for (let i: number = 0; i < b; i++) {
            c = new Circles(250, 250);   // ein neuer Kreis wird erstellt
            circles[i] = c;
            console.log("create new circle");
            c.setRandomPosition();
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern


    } // INIT ENDE

    function startGame(): void {
        intro.style.display = "none";
        window.setTimeout(animate, 10);
    }


    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        c.update();
        console.log("animate");
        window.setTimeout(animate, 10);

    }


}