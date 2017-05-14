var L7_Classes;
(function (L7_Classes) {
    var Flower = (function () {
        function Flower(_x, _y) {
            this.flowers = [];
            this.x = _x;
            this.y = _y;
        }
        // Blumen an random Stelle plazieren
        Flower.prototype.setRandomPlace = function () {
            for (var i = 0; i < 50; i++) {
                this.randomFlowerNumber = Math.floor((Math.random() * 5) + 0); // 1. Attribut von Flower
                this.x = (Math.random() * (400 - 250) + 250); // 2. Attribut von Flower
                this.y = (Math.random() * (540 - 450) + 450); // 3. Attribut von Flower
                switch (this.randomFlowerNumber) {
                    case 0:
                        this.drawFlower1(); // 1. Methode this.x, this.y, "#FA58F4"
                        break;
                    case 1:
                        this.drawFlower2(); //this.x, this.y, "#2ECCFA"
                        break;
                    //                    case 2:
                    //                        this.drawFlower3();       //2. Methode  this.x, this.y, "#6A0888"
                    //                        break;
                    default:
                        break;
                } // Ende switch
                this.flowers.push(new Flower(this.x, this.y)); // Array flowers erstellen um die Blumen darin abzuspeichern um auf sie sp�ter zugreifen zu k�nnen
            } // Ende for-Schleife
            console.log(this.flowers); //Array in die Konsole
        }; //ende Funktion setRandomPlace
        // BLume
        Flower.prototype.drawFlower1 = function () {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; // Attribut von Flower
            L7_Classes.crc2.strokeStyle = L7_Classes.crc2.fillStyle;
            L7_Classes.crc2.moveTo(this.x, this.y);
            L7_Classes.crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            L7_Classes.crc2.lineTo(this.x + 15, this.y + 5);
            L7_Classes.crc2.lineTo(this.x + 10, this.y);
            L7_Classes.crc2.lineTo(this.x + 5, this.y + 5);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        };
        // BLume 2 
        Flower.prototype.drawFlower2 = function () {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            ; // "#F2F5A9"
            L7_Classes.crc2.strokeStyle = L7_Classes.crc2.fillStyle;
            L7_Classes.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            L7_Classes.crc2.moveTo(this.x, this.y + 10);
            L7_Classes.crc2.lineTo(this.x, this.y + 20);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        };
        return Flower;
    }());
    L7_Classes.Flower = Flower;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=flowers.js.map