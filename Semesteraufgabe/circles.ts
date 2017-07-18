namespace crazyCircles {
    export class Circles {
        x: number;
        y: number;


        constructor() {
            this.setRandomPosition();
        }
        
        update(): void {
            this.moveCircles();
            this.drawCircles();
        }

        drawCircles(): void {
            crc2.fillStyle = "black";
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI, false);
            crc2.fill();
            crc2.stroke();
        }

        moveCircles(): void {
            this.x += Math.random() * 10 - 2;
            this.y += Math.random() * 10 - 2;
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (400 - 100) + 100);      // 2. Attribut von Flower
            this.y = (Math.random() * (500 - 100) + 100);      // 3. Attribut von Flower

        }
    }
}