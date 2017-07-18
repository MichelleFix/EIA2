namespace crazyCircles {
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //Variablen für die schwarzen Kreise
    let x: number;
    let y: number;
    let circles: Circles[] = [];
    let b: number = 10;
    let speed: number = 3;

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

        start.addEventListener("click", startGame);

        for (let i: number = 0; i < b; i++) {
            let c: Circles = new Circles();   // ein neuer Kreis wird erstellt
            circles[i] = c;
            c.setRandomPosition();
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern


    } // INIT ENDE

    function startGame(): void {
        intro.style.display = "none";
        animateCircles();
        console.log("animate");
        window.setTimeout(animateCircles, 200);
    }

    function animateCircles(): void {

        crc2.putImageData(imgData, 0, 0);


        for (let i: number = 0; i < b; i++) {

            let c: Circles = circles[i];

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
            if ((c.x + speed + c.radius > 0 + canvas.width) || (c.x - c.radius + speed < 0)) {
                speed = - speed;
            }
            if ((c.y + speed + c.radius > 0 + canvas.height) || (c.y - c.radius + speed < 0)) {
                speed = - speed;
            }


            c.update();

        }

        window.setTimeout(animateCircles, 10);
    }



}