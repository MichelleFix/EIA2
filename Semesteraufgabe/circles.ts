namespace crazyCircles {
    export class Circles {
        x: number;
        y: number;
        radius: number;


        constructor() {
            this.setRandomPosition();
            this.radius = 30;
        }

        update(): void {
            this.moveCircles();
            this.drawCircles();
        }

        drawCircles(): void {
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        moveCircles(): void {
            this.x += Math.random() * 5;
            this.y += Math.random() * 5;

        }

        setRandomPosition(): void {
            this.x = (Math.random() * (500) + 10);      // 2. Attribut von Flower
            this.y = (Math.random() * (500) + 10);      // 3. Attribut von Flower

        }
    }
}