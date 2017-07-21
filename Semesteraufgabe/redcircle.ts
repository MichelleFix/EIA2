namespace crazyCircles {

    export class RedCircle extends Circles {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        radius: number;

        constructor() {
            super();
            this.vx = 3;
            this.vy = -3;
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.strokeStyle = "red";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }



        move(): void {
            let newX = this.x + this.vx;


            //linker oder rechter Rand erreicht
            if (newX > crc2.canvas.width - this.radius || newX < this.radius) {
                this.vx = -this.vx;
            }

            //oberer Rand erreicht
            if (this.y + this.vy < this.radius || this.y + this.vy >= crc2.canvas.height - this.radius) {
                this.vy = -this.vy; //nach unten bewegen --> Vorzeichen von vy zu +
            }

            //neue Position
            this.x += this.vx; //+2
            this.y += this.vy; //-2
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (400) + 50);      // 2. Attribut von Flower
            this.y = (Math.random() * (400) + 50);      // 3. Attribut von Flower

        }

    }
}