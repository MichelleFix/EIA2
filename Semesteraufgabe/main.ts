namespace crazyCircles {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //Variablen für die schwarzen Kreise
    let x: number;
    let y: number;
    let circles: Circles[] = [];
    let b: number = 10;

    let imgData: ImageData;     // Bildschirm wird aktualisiert

    window.addEventListener("load", init);


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        for (let i: number = 0; i < b; i++) {
            let c: Circles = new Circles();   // ein neuer Kreis wird erstellt
            c.setRandomPosition();
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern
        animateCircles();
        window.setTimeout(animateCircles, 200);
    } // INIT ENDE

    function animateCircles(): void {

        crc2.putImageData(imgData, 0, 0);


        for (let i: number = 0; i < b; i++) {

            let k: Circles = circles[i];


            if (k.x < 0 - 10) {
                k.x = canvas.width + 10;
            }

            if (k.y > canvas.height) {

                k.y = 0;
            }

            if (k.y < 0) {
                k.y = canvas.height;
            }
            k.update();

        }

        window.setTimeout(animateCircles, 20);
    }



}