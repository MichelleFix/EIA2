namespace L7_Classes {

    export class Flower {
        x: number;
        y: number;
        randomFlowerNumber: number;
        radius: number;
        fillColor: string;
        flowers: Flower[] = [];
        type: string;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            
        }


        // Blumen an random Stelle plazieren
        setRandomPlace(): void {
            for (let i: number = 0; i < 50; i++) {
                this.randomFlowerNumber = Math.floor((Math.random() * 5) + 0);       // 1. Attribut von Flower

                this.x = (Math.random() * (400 - 250) + 250);      // 2. Attribut von Flower
                this.y = (Math.random() * (540 - 450) + 450);      // 3. Attribut von Flower
                switch (this.randomFlowerNumber) {                 // 1. Attribut von Flower
                    case 0:
                        this.drawFlower1(this.x, this.y, "#FA58F4");           // 1. Methode
                        break;

                    case 1:
                        this.drawFlower1(this.x, this.y, "#2ECCFA");
                        break;

                    case 2:
                        this.drawFlower2(this.x, this.y, "#6A0888");       //2. Methode
                        break;

                    default:
                        break;
                }   // Ende switch
                this.flowers.push(new Flower(this.x, this.y));      // Array flowers erstellen um die Blumen darin abzuspeichern um auf sie später zugreifen zu können
                console.log(this.flowers);                          //Array in die Konsole
            }   // Ende for-Schleife
        }   //ende Funktion setRandomPlace

        // BLume

        drawFlower1(): void {  // _x: number, _y: number, _fillColor: string
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;                            // Attribut von Flower
            crc2.strokeStyle = this.fillColor;
            crc2.moveTo(this.x, this.y);
            //        crc2.lineTo(this.x,this.y+10);
            crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            crc2.lineTo(this.x + 15, this.y + 5);
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 5, this.y + 5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }

        // BLume 2 

        drawFlower2(_x: number, _y: number, radius: number, _fillColor: string): void {     //  radius ist ein Attribut von Flower
            crc2.beginPath();
            crc2.fillStyle = this.fillColor; // "#F2F5A9"
            crc2.strokeStyle = this.fillColor;
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x, this.y + 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


        }

    }
}