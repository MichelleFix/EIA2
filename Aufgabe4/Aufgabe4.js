var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    var crc2;
    function init(_event) {
        console.log("Hallo");
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //gibt es mehrere Canvas tags im Html, kann ich das gewollte element mit der zahl in der eckigen klammer rauspicken
        // bsp: document.getElementsByTagName("canvas")[4]
        console.log(canvas);
        var crc2 = canvas.getContext('2d');
        // Himmel
        crc2.fillStyle = "#A9D0F5";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Gras
        crc2.fillStyle = "#BEF781";
        crc2.fillRect(0, 400, canvas.width, 200);
        //Sonne
        //        drawSun(0, 0, "#FFFF00");
        //        console.log("Sonne");
        //Berg
        drawMountain();
        console.log("Berg");
    }
    //    function drawSun(_x:number, _y:number, _fillColor: string): void {
    //        crc2.beginPath();
    //        crc2.moveTo(400, 50);
    //        crc2.fillStyle = "#FFFF00";
    //        crc2.arc(10, 10, 50, 0, 2 * Math.PI, false);
    //        crc2.closePath();
    //        crc2.fill();                                //Warum hier 1 fill, obwohl nach dem close?
    //
    //    }
    //
    // ### BERG ### 
    function drawMountain() {
        crc2.beginPath();
        crc2.moveTo(50, 400);
        crc2.lineTo(100, 200);
        crc2.lineTo(200, 400);
        crc2.closePath();
        crc2.fillStyle = "#c8c8c8";
        crc2.fill();
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=Aufgabe4.js.map